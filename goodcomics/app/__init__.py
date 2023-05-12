from flask import Flask
from .config import Config
import requests
from .marvel_api_key import url_parameter,marvel_keys
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

# @app.route("/charcters")
# def get_characters():
#     print(url_parameter)
#     # response = requests.get(f'developer.marvel.com/v1/public/characters?nameStartsWith=spider&{url_parameter}')
#     response = requests.get(f'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&apikey=a3f9eb5a72f5adba58dc19608a2cf148')
#     if response.status_code == 200:
#         data = response.json()
#         return "hit"
#     else:
#         print('Request failed with status code:', response.status_code)
#         print('Reason: ', response.reason)
#     return response.reason    
    

