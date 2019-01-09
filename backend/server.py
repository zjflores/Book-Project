
from flask import (Flask, jsonify, redirect, request, session)
# from flask_debugtoolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from model import User, Book, BookUser, connect_to_db, db
from data.keys.secret_keys import flask

app = Flask(__name__)
CORS(app)
# Required to use Flask sessions and the debug toolbar
app.secret_key = flask.secret


@app.route('/')
def index():
	"""Homepage"""
	
	react_dict = {}
	react_dict["quote"] = '“Never trust anyone who has not brought a book with them.” – Lemony Snicket'
	return jsonify(react_dict)

@app.route('/login', methods=['POST'])
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
			session["isLoggedIn"] = True
			print(session)
			return jsonify("Successfully logged in")
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
def get_user_books():
	"""Query db for a user's books"""

	books = []
	q = BookUser.query.filter(BookUser.user_id == 2).all()

	for i in q:
		book = Book.query.get(i.book_id)
		books.append({'title':book.title, 'author':book.author}) 
	print(books)
	return jsonify(books)


# @app.route('/delete-book', methods=["POST"])
# def delete_book():
# 	"""Remove Book from db"""
# 	data = request.get_json()
# 	print(data)

# 	q = Book.query.filter(Book.id == )
# 	db.session.delete(q)
# 	db.session.commit()
		
	
if __name__ == "__main__":
	# We have to set debug=True here, since it has to be True at the
	# point that we invoke the DebugToolbarExtension
	app.debug = True

	connect_to_db(app)

	# Use the DebugToolbar
	# DebugToolbarExtension(app)

	app.run(port=5000, host='0.0.0.0')