
from flask import (Flask, jsonify, render_template, redirect, request, flash, session)
from flask_cors import CORS
from models.relational_model import *
from keys.secret_keys import flask

app = Flask(__name__)
CORS(app)

# Required to use Flask sessions and the debug toolbar
app.secret_key = flask.secret


@app.route('/')
def index():
	"""Homepage"""
	
	react_dict = {}
	react_dict["quote"] = "Life is what happens while you wait for death."
	return jsonify(react_dict)

if __name__ == "__main__":
	# We have to set debug=True here, since it has to be True at the
	# point that we invoke the DebugToolbarExtension
	app.debug = True

	connect_to_db(app)

	# Use the DebugToolbar
	# DebugToolbarExtension(app)

	app.run(port=5000, host='0.0.0.0')