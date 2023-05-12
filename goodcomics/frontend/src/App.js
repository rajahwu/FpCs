import { MARVEL_API_KEY } from "./utils/marvelAPI";
import { useState, useEffect } from "react";
import ContentCard from "./components/ContentCard";

import "./App.css";

async function getMarvelResource(searchTerm) {
  const data = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm ? searchTerm : "spider"}&${MARVEL_API_KEY}`
  ).then((data) => data.json());
  return data;
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resource, setResource] = useState({});
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (resource.data) {
      console.log("useEffect resource", resource?.data.results);
      setContent(resource.data.results);
    }
  }, [resource]);

  function handleClick(e) {
    e.preventDefault();
    getMarvelResource(searchTerm).then((data) => setResource(data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>GoodComics</p>
        <form>
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleClick}>Search</button>
        </form>

          {content?.map((entry) => (
            <div key={entry.id}>
            <ContentCard
              title={entry.name}
              imageUrl={`${entry.thumbnail.path}.${entry.thumbnail.extension}`}
              description={entry.description}
              urls={entry.urls}
            />
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
