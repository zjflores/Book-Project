import csv
from sqlalchemy import func
from model import Book, User, Genre, BookUser, connect_to_db, db
from server import app

def load_users():
	"""Load users into db"""

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
	"""Load books from into db"""
	
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

	# Delete row to avoid duplicates
	Genre.query.delete()

	for row in (open('data/genres.csv')):
		new_genre = Genre(genre=row)
		db.session.add(new_genre)
	db.session.commit()

def load_user_books():
	"""Load a user's books into db"""

	print("BookUser")

	# Delete row to avoid duplicates
	BookUser.query.delete()

	bookuser_rows = csv.DictReader(open('data/bookuser.csv'))

	for bookuser in bookuser_rows:
		user = User.query.filter(User.name == bookuser["name"]).one()
		book = Book.query.filter(Book.title == bookuser["title"]).first()

		new_bookuser = BookUser(user_id=user.id,
								book_id=book.id)
		db.session.add(new_bookuser)
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

	