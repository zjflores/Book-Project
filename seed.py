import csv
from sqlalchemy import func
from model import Book, User, Genre, connect_to_db, db
from server import app

def load_users():
	print("Users")

	# Delete row to avoid duplicates
	User.query.delete()
	
	user_rows = csv.DictReader(open('data/user_data.csv'))

	for user in user_rows:
		new_user = User(name=user["name"],
						email=user["email"],
						password=user["password"])
		db.session.add(new_user)
	db.session.commit()


def load_books():
	"""Load books from books_data into db"""
	
	print("Books")

	# Delete row to avoid duplicates
	Book.query.delete()

	book_rows = csv.DictReader(open('data/book_data.csv'))
	for book in book_rows:
		new_book = Book(title=book["title"],
						author=book["author"])
		db.session.add(new_book)
	db.session.commit()


def load_genres():
	"""Load genres into db"""
	print("Genres")

	Genre.query.delete()

	for row in (open('data/genres.csv')):
		new_genre = Genre(genre=row)
		db.session.add(new_genre)
	db.session.commit()

def load_user_books():
	"""Load a user's books into db"""
	user_books_dict = {}
	bookuser_rows = csv.DictReader(open('data/bookuser.csv'))

	for bookuser in bookuser_rows:
		print (bookuser)
		user = User.query.filter(User.name == bookuser["name"]).one()
		book = Book.query.filter(Book.title == bookuser["title"]).first()

		if user_books_dict.get(user.name, False):
			user_books_dict[user.name].append(book.id)
		else:
			user_books_dict[user.name] = [book.id]

	for key in user_books_dict.keys():
		# How do I update a column
		new_books = User.insert().values(books=user_books_dict[key])
		db.session.add(new_books)
	db.session.commit()


	


if __name__ == "__main__":
	connect_to_db(app)
	print(db)

	# In case tables haven't been created, create them
	db.create_all()

	# Import different types of data
	
	# load_users()
	# load_books()
	# load_genres()
	load_user_books()

	