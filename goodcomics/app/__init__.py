from flask import Flask, jsonify
import feedparser
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


@app.route("/rss")
def parse_rss():
    rss_url = 'https://1comicbooksblog.blogspot.com/feeds/posts/default?alt=rss'
    feed = feedparser.parse(rss_url)
    
    parsed_data = []
    for entry in feed.entries:
        parsed_data.append({
            'title': entry.title,
            'link': entry.link
        })
        
    return jsonify(parsed_data)