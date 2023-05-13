from flask import Flask
from .config import Config
# from .models import db
# from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
# db.init_app(app)
# Migrate(app, db)

@app.route("/")
def index():
    # print(url_parameter)
    return "GoodComics"
