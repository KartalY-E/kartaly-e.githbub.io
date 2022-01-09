from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def root():
    return render_template("index.html")


@app.errorhandler(500)
def internal_server_error(e):
    return render_template("page_not_found.html"), 500


@app.errorhandler(404)
def page_not_found():
    return render_template("page_not_found.html"), 404
