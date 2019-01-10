
from flask import (Flask, jsonify, redirect, request, session)
# from flask_debugtoolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from model import User, Book, BookUser, connect_to_db, db
from data.keys.secret_keys import flask

app = Flask(__name__)
#CORS(app)
cors = CORS(app, resources={r"/*": { r"supports_credentials":True, r"origins": r"http://localhost:3000" }})
# Required to use Flask sessions and the debug toolbar
app.secret_key = flask.secret

@app.after_request
def after(response):
  """Adds headers to all responses to satisfy CORS."""
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

@app.route('/')
def index():
	"""Homepage"""
	
	react_dict = {}
	react_dict["quote"] = '“Never trust anyone who has not brought a book with them.” – Lemony Snicket'
	return jsonify(react_dict)

@app.route('/login', methods=['POST'])
@cross_origin()
def login():
	"""validates user's login info"""
	data = request.get_json()
	print(data)

	q = User.query.filter(User.email == data["email"])

	if q.count() > 0:
		q = User.query.filter((User.email == data["email"]) & (User.password == data["password"]))
		if q.count() > 0:
			user = q.one()
			session['user_id'] = user.id
			print()
			print()
			print(session)
			print()
			print()
			return jsonify("Successfully logged in for %s" % user.id)
		else:
			return jsonify("Invalid credentials")
	else:
		return jsonify("User does not exist")


@app.route('/add-book', methods=['POST'])
def add_book():
	"""Add book to db"""
	
	data = request.get_json()
	print(data)

	q = Book.query.filter((Book.title == data["title"]) & (Book.author == data["author"]))
	if q.count() > 0:
		return jsonify("Book already exists")
		
	else:
		new_book = Book(title=data['title'], author=data['author'])
		db.session.add(new_book)
		db.session.commit()
		return jsonify("Book successfully added")


@app.route('/get-user-books', methods=['GET'])
@cross_origin()
def get_user_books():
	"""Query db for a user's books"""

	books = []
	print()
	print()
	print(session)
	print()
	print()
	if 'user_id' in session:
		q = BookUser.query.filter(BookUser.user_id == session['user_id']).all()
		for i in q:
			book = Book.query.get(i.book_id)
			books.append({'title':book.title, 'author':book.author}) 
		print(books)
	return jsonify(books)


@app.route('/delete-book', methods=["POST"])
def delete_book():
	"""Remove Book from db"""

	data = request.get_json()
	print()
	print()
	print(data)
	print()
	print()
	
	book= Book.query.filter((Book.title == data["title"]) & (Book.author == data["author"])).one()
	print()
	print()
	print(book)
	print()
	print()

	q = BookUser.query.filter(BookUser.book_id == book.id)
	# q2 = BookGenre.query.filter(BookGenre.book_id == book.id)
	if q.count() > 0:
		user_book = q.one()
		db.session.delete(user_book)
		print()
		print()
		print(user_book)
		print()
		print()
	# if q2.count() > 0:
	# 	bookgenre = q.one()
	# 	db.session.delete(bookgenre)
	# db.session.delete(book)
	db.session.commit()
	return jsonify("Book successfully deleted")
		
	
if __name__ == "__main__":
	# We have to set debug=True here, since it has to be True at the
	# point that we invoke the DebugToolbarExtension
	app.debug = True

	connect_to_db(app)

	# Use the DebugToolbar
	# DebugToolbarExtension(app)

	app.run(port=5000, host='0.0.0.0')