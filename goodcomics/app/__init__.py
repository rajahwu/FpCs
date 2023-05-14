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


@app.route("/api/rss-feed")
def parse_rss():
    rss_url = 'https://1comicbooksblog.blogspot.com/feeds/posts/default?alt=rss'
    feed = feedparser.parse(rss_url)
    
#   dict_keys([
    # 'id', 
    # 'guidislink', 
    # 'published', 
    # 'published_parsed', 
    # 'updated', 
    # 'updated_parsed', 
    # 'tags', 
    # 'title', 
    # 'title_detail', 
    # 'summary', 
    # 'summary_detail', 
    # 'links', 
    # 'link', 
    # 'authors', 
    # 'author', 
    # 'author_detail', 
    # 'media_thumbnail', 
    # 'href'])  
    
    parsed_data = []
    for entry in feed.entries:
        parsed_data.append({
            'title': entry.title,
            'link': entry.link
        })
    
    keys = feed.entries[0].keys()
    # print(keys)
        
    return jsonify(parsed_data)