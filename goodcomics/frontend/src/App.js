import { MARVEL_API_KEY } from "./utils/marvelAPI";
import { useState, useEffect } from "react";

import "./App.css";

async function getMarvelResource(searchTerm) {
  const data = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&${MARVEL_API_KEY}`
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
        <ul style={{ listStyle: "none" }}>
          {content.map((entry) => (
            <li key={entry.id}>
              <p>{entry.name}</p>
              <img
                width={150}
                height={150}
                src={`${entry.thumbnail.path}.${entry.thumbnail.extension}`}
                alt={entry.name}
              />
              <div>
                {entry.urls.map((url) => (
                  <div style={{ display: "inline-block" }}>
                    <a
                      style={{
                        fontSize: "1rem",
                        padding: "0.5rem",
                        color: "yellow",
                        textDecoration: "none",
                        textTransform: "capitalize",
                      }}
                      href={url.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {url.type}
                    </a>
                  </div>
                ))}
              </div>
              {entry.description && <div
             style={{
              display:"inline-block",
              width:"450px",
              height:"250px",
              backgroundColor: "white",
              borderRadius: "5px solid black",
              color: "black"
             }}
              >
              {entry.description}
              </div>}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
