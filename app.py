#!/usr/bin/env python

from flask import Flask, send_file, send_from_directory
from dotenv import load_dotenv, find_dotenv
from os import getenv, environ

load_dotenv(find_dotenv())

environ["FLASK_ENV"] = "development"
HOST = str(getenv("HOST") or "0.0.0.0")
PORT = int(getenv("PORT") or 8000)

app = Flask(__name__)

@app.route("/<path:path_name>")
def main(path_name):
  return send_from_directory(".", path_name)

@app.route("/")
def index():
  return send_file("index.html")

if __name__ == "__main__":
  app.run(
    port=PORT,
    host=HOST,
    debug=False
  )