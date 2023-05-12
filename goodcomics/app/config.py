import os

class Config():
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    PUBLIC_MARVEL_API_KEY = os.environ.get("PUBLIC_MARVEL_API_KEY")
    PRIVATE_MARVEL_API_KEY = os.environ.get("PRIVITE_MARVEL_API_KEY")