import os
import hashlib
from datetime import datetime

marvel_keys = {
    "public": os.environ.get("PUBLIC_MARVEL_API_KEY"),
    "private": os.environ.get("PRIVITE_MARVEL_API_KEY")
}

ts = datetime.now().strftime("%Y%m%d%H%M%S")
m = hashlib.md5(f'ts{marvel_keys["private"]}{marvel_keys["public"]}'.encode('utf-8'))
hash = m.hexdigest()

url_parameter = f'ts={ts}&apikey={marvel_keys["public"]}&hash={hash}'

