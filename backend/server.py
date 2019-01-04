
from flask import (Flask, jsonify, render_template, redirect, request, flash, session)
from flask_cors import CORS
from model import *
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

# @app.route('/login')
# def login():


# @app.route('/add-book')
# def add_book():
# 	"""Add book to db"""

if __name__ == "__main__":
	# We have to set debug=True here, since it has to be True at the
	# point that we invoke the DebugToolbarExtension
	app.debug = True

	connect_to_db(app)

	# Use the DebugToolbar
	# DebugToolbarExtension(app)

	app.run(port=5000, host='0.0.0.0')