from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects import postgresql
db = SQLAlchemy()

class Book(db.Model):
	"""Book added to db"""

	__tablename__ = "books"

	id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)
	title = db.Column(db.String(250), 
						nullable = False)
	author = db.Column(db.String(100))	

class Genre(db.Model):
	"""Genres added to db"""

	__tablename__ = "genres"
	id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)	
	genre = db.Column(db.String(100),
						unique = True)


class BookGenre(db.Model):
	"""Relational table of books with their genre"""

	__tablename__ = "books_genres"
	id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)
	book_id = db.Column(db.Integer,
						db.ForeignKey('books.id'),
						nullable = False)
	genre_id = db.Column(db.Integer,
						db.ForeignKey('genres.id'),
						nullable = False)	


class User(db.Model):
	"""Users added to the db"""

	__tablename__ = "users"
	id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)
	name = db.Column(db.String(250))
	email = db.Column(db.String(500))
	password = db.Column(db.String(25))
	books = db.Column(postgresql.ARRAY(db.Integer,dimensions=2))	


class Meeting(db.Model):
	"""Meetings added to the db"""

	__tablename__ = "meetings"
	id = db.Column(db.Integer,
						autoincrement = True,
						primary_key = True)
	date = db.Column(db.String(10))
	books = db.Column(postgresql.ARRAY(db.Integer,dimensions=2))	
	users = db.Column(postgresql.ARRAY(db.Integer,dimensions=2))


##############################################################################
# Helper functions

def connect_to_db(app):
    """Connect the database to our Flask app."""

    # Configure to use our PstgreSQL database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///books'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)

if __name__ == "__main__":
    # As a convenience, if we run this module interactively, it will leave
    # you in a state of being able to work with the database directly.

    from server import app
    connect_to_db(app)
    print("Connected to DB.")


