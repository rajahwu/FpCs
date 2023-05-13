import { useState, useEffect } from "react";
import ContentCard from "./components/ContentCard";

import { getMarvelCharcters } from "./resources/marvel";

import "./App.css";

function App() {
  const [searchTerms, setSearchTerms] = useState({});
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
    getMarvelCharcters(searchTerms).then((data) => setResource(data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>GoodComics</p>
        <form>
          <input
            name="startsWith"
            type="text"
            placeholder="search starts with"
            value={searchTerms.startsWith ? searchTerms.startsWith : ""}
            onChange={(e) => setSearchTerms({searchTerms, ...{ startsWith: e.target.value }})}
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
