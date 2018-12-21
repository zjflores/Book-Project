def hello()

import csv
from sqlalchemy import func
from models.relational_model import Book, User, Genre, connect_to_db, db
from server import app
# from sqlalchemy.dialects.postgresql import array



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
	user = User.query.get(1)
	for book in book_rows:
		new_book = Book(user_id=user.id,
						title=book["title"],
						author=book["author"])
		db.session.add(new_book)
	db.session.commit()


def load_genres():
	"""Load genres into db"""
	print("Genres")

	Genre.query.delete()

	for row in (open('data/genres.csv')):
		print(row)
		new_genre = Genre(genre=row)
		db.session.add(new_genre)
	db.session.commit()

def load_bookgenres()
	"""Load book genres into db"""
	


if __name__ == "__main__":
	connect_to_db(app)
	print(db)

	# In case tables haven't been created, create them
	db.create_all()

	# Import different types of data
	
	# load_users()
	# load_books()
	load_genres()

	