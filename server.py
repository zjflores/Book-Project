from jinja2 import StrictUndefined

from flask import (Flask, render_template, redirect, request, flash, session)

from models.relational_model import *
from keys.secret_keys import flask

app = Flask(__name__)

# Required to use Flask sessions and the debug toolbar
app.secret_key = flask.secret

#Jinja undefined fails loudly
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def index():
	"""Homepage"""
	html = render_template("homepage.html")
	return html


if __name__ == "__main__":
    # We have to set debug=True here, since it has to be True at the
    # point that we invoke the DebugToolbarExtension
    app.debug = True
    # make sure templates, etc. are not cached in debug mode
    app.jinja_env.auto_reload = app.debug

    connect_to_db(app)

    # Use the DebugToolbar
    # DebugToolbarExtension(app)

    app.run(port=5000, host='0.0.0.0')