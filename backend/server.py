
from flask import (Flask, jsonify, redirect, request, session)
# from Flask-DebugToolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from model import User, Book, BookUser, Genre, BookGenre, connect_to_db, db
from data.keys.secret_keys import flask

app = Flask(__name__)
cors = CORS(app, resources={
    r"/*": {r"supports_credentials": True, r"origins": r"http://localhost:3000"}})
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


@app.route('/register', methods=['POST'])
@cross_origin()
def register():
    """Registers new user, adds them to db"""

    data = request.get_json()
    print(data)

    q = User.query.filter(User.email == data["email"])
    if q.count() > 0:
        return jsonify("User already exists")
    else:
        new_user = User(
            name=data["name"], email=data["email"], password=data["password"])
        session['user_id'] = new_user.id
        db.session.add(new_user)
        db.session.commit()
        return jsonify("User successfully added to db")


@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    """validates user's login info"""
    data = request.get_json()
    print(data)

    q = User.query.filter(User.email == data["email"])

    if q.count() > 0:
        q = User.query.filter((User.email == data["email"]) & (
            User.password == data["password"]))
        if q.count() > 0:
            user = q.one()
            session['user_id'] = user.id
            print(session)
            return jsonify("Successfully logged in for %s" % user.id)
        else:
            return jsonify("Invalid credentials")
    else:
        return jsonify("User does not exist")


@app.route('/logout', methods=['POST'])
@cross_origin()
def logout():
    """Remove user from session"""

    data = request.get_json()
    print(data)

    session.clear()
    return jsonify("User has been logged out")


@app.route('/get-genres', methods=['GET'])
@cross_origin()
def get_genres():
    "Query db for genres"

    genres = []
    q = Genre.query.all()
    for i in q:
        genres.append({'text': i.genre, 'value': i.id})

    return jsonify(genres)


@app.route('/set-genres', methods=['POST'])
@cross_origin()
def set_genres():
    """Adds new BookGenre entries"""

    print("Touched server")
    data = request.get_json()
    print(data)

    for genre in data["genres"]:
        new_book_genre = BookGenre(book_id=data["id"], genre_id=genre["value"])
        db.session.add(new_book_genre)
    db.session.commit()
    return jsonify("Genres added")


@app.route('/get-users', methods=['GET'])
@cross_origin()
def get_users():
    """Return list of users from db."""

    users = []
    print("session id: {}".format(session['user_id']))

    q = User.query.all()
    print(q)
    for user in q:
        if user.id != session['user_id']:
            users.append({'name': user.name, 'id': user.id})
    return jsonify(users)


@app.route('/get-user-books', methods=['POST'])
@cross_origin()
def get_user_books():
    """Query db for a user's books"""
    data = request.get_json()
    print(data)

    books = []

    q = BookUser.query.filter(BookUser.user_id == data['id']).all()
    for i in q:
        book = Book.query.get(i.book_id)
        books.append(
            {'title': book.title, 'author': book.author, 'id': book.id})
    print(books)
    return jsonify(books)


@app.route('/get-your-books', methods=['GET'])
@cross_origin()
def get_your_books():
    """Query db for logged in user's books"""

    books = []
    print("session id: {}".format(session['user_id']))

    if 'user_id' in session:
        q = BookUser.query.filter(BookUser.user_id == session['user_id']).all()
        for i in q:
            book = Book.query.get(i.book_id)
            books.append(
                {'title': book.title, 'author': book.author, 'id': book.id})
        print(books)
    return jsonify(books)


@app.route('/add-book', methods=['POST'])
@cross_origin()
def add_book():
    """Add book to db"""

    data = request.get_json()
    print(data)
    print("session id: {}".format(session['user_id']))

    q = Book.query.filter((Book.title == data["title"]) & (
        Book.author == data["author"]))
    if q.count() > 0:
        book = q.one()
        new_user_book = BookUser(book_id=book.id, user_id=session['user_id'])
        db.session.add(new_user_book)
        db.session.commit()
        book = {'title': data["title"],
                'author': data["author"], 'id': book.id}
        return jsonify(book)

    else:
        new_book = Book(title=data['title'], author=data['author'])
        db.session.add(new_book)
        db.session.commit()
        new_user_book = BookUser(
            book_id=new_book.id, user_id=session['user_id'])
        db.session.add(new_user_book)
        db.session.commit()
        book = {'title': data["title"],
                'author': data["author"], 'id': new_book.id}
        return jsonify(book)


@app.route('/delete-book', methods=["POST"])
def delete_book():
    """Remove Book from db"""

    data = request.get_json()
    print(data)
    print(session)

    user_book = BookUser.query.filter(BookUser.book_id == data["id"]).one()
    db.session.delete(user_book)
    print(user_book)
    db.session.commit()
    return jsonify("Book successfully deleted")


@app.route('/update-book', methods=["POST"])
@cross_origin()
def update_book():
    """Update book in db"""

    data = request.get_json()
    print(data)
    print(session['user_id'])

    q = BookUser.query.filter(BookUser.book_id == data["id"])
    q2 = Book.query.filter((Book.title == data["newTitle"]) & (
        Book.author == data["newAuthor"]))

    if q.count() == 1:
        if q2.count() == 1:
            book = q2.one()
            new_book = BookUser(book_id=book.id, user_id=session['user_id'])
            db.session.add(new_book)
            db.session.commit()
            book = {'title': book.title,
                    'author': book.author, 'id': book.id}
            return jsonify(book)
        else:
            new_book = Book(title=data["newTitle"], author=data["newAuthor"])
            db.session.add(new_book)
            db.session.commit()
            new_user_book = BookUser(
                book_id=new_book.id, user_id=session['user_id'])
            db.session.add(new_user_book)
            old_user_book = BookUser.query.filter(
                (BookUser.user_id == session["user_id"]) & (BookUser.book_id == data["id"])).one()
            db.session.commit()
            db.session.delete(old_user_book)
            db.session.commit()
            book = {'title': data["newTitle"],
                    'author': data["newAuthor"], 'id': new_book.id}
            return jsonify(book)
    else:
        if q2.count() == 1:
            book = q2.one()
            print(book)
            new_book = BookUser(book_id=book.id, user_id=session['user_id'])
            db.session.add(new_book)
            db.session.commit()
            book = {'title': book.title,
                    'author': book.author, 'id': book.id}
            return jsonify(book)
        else:
            book = Book.query.get(data["id"])
            book.title = data["newTitle"]
            book.author = data["newAuthor"]
            db.session.commit()
            book = {'title': data["newTitle"],
                    'author': data["newAuthor"], 'id': book.id}
            return jsonify(book)


@app.route('/book/set-start-date', methods=['POST'])
@cross_origin()
def set_start_date():
    data = request.get_json()
    print(data)

    book = BookUser.query.filter(BookUser.book_id == data["id"]).one()
    book.start_date = data["start"]
    db.session.commit()
    return jsonify("Start date added")


@app.route('/book/set-end-date', methods=['POST'])
@cross_origin()
def set_end_date():
    data = request.get_json()
    print(data)

    book = BookUser.query.filter(BookUser.book_id == data["id"]).one()
    book.end_date = data["end"]
    db.session.commit()
    return jsonify("End date added")


if __name__ == "__main__":
    # We have to set debug=True here, since it has to be True at the
    # point that we invoke the DebugToolbarExtension
    app.debug = True

    connect_to_db(app)

    # Use the DebugToolbar
    # DebugToolbarExtension(app)

    app.run(port=5000, host='0.0.0.0')
