import { useState, useEffect } from "react";
import ContentCard from "./components/ContentCard";

import {  getMarvelCharacters } from "./resources/marvel";

import "./App.css";

function App() {
  const [searchTerms, setSearchTerms] = useState({});
  const [resource, setResource] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (resource.data) {
      console.log("useEffect resource", resource?.data.results);
      setContent(resource.data.results);
    }
  }, [resource]);

  function handleClick(e) {
    e.preventDefault();
    getMarvelCharacters(searchTerms).then((data) => setResource(data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>GoodComics</h1>
        <form>
        <p>Search Charcters</p>
          <input
            name="startsWith"
            type="text"
            placeholder="starts with"
            value={searchTerms.startsWith ? searchTerms.startsWith : ""}
            onChange={(e) =>
              setSearchTerms({ searchTerms, ...{ startsWith: e.target.value } })
            }
          />
          <button onClick={handleClick}>Search</button>
        </form>

        {content?.map((entry) => (
          <div key={entry.id}>
            <ContentCard
              id={entry.id}
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
