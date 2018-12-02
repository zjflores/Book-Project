from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Book(db.model):
	"""Book added to db"""

	__tablename__ = "books"

	book_id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)
	title = db.Column(db.String(250), 
						nullable = False)
	author = db.Column(db.String(100))
	genres = db.relationship("Genre",
							secondary="books_genres",
							backref="books")


class Genre(db.model):
	"""Genres added to db"""

	__tablename__ = "genres"
	genre_id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)	
	genre = db.Column(db.String(100),
						unique = True)


class BookGenre(db.model):
	"""Relational table of books with their genre"""

	__tablename__ = "books_genres"
	book_genre_id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)
	book_id = db.Column(db.Integer,
						db.ForeignKey('books.book_id'),
						nullable = False)
	genre_id = db.Column(db.Integer,
						db.ForeignKey('genres.genre_id'),
						nullable = False)	


class User(db.model):
	"""Users added to the db"""

	__tablename__ = "users"
	user_id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)
	name = db.Column(db.String(250))
	email = db.Column(db.String(500))
	password = db.Column(db.String(25))	


class Meeting(db.model):
	"""Meetings added to the db"""

	__tablename__ = "meetings"
	meeting_id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)
	date = db.Column(db.String(10))
	books = db.Column(JSON)
	users = db.Column(JSON)


