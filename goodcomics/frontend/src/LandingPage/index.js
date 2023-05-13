import { useState, useEffect } from "react";
import { ContentCard } from "../components";
import { getMarvelCharacters } from "../resources/marvel";

const SearchBar = ({ searchTerms, setSearchTerms, setResource }) => {
  const handleClick = (e) => {
    e.preventDefault();
    getMarvelCharacters(searchTerms).then((data) => setResource(data));
  };

  return (
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
  );
};

export default function LandingPage() {
  const [searchTerms, setSearchTerms] = useState({});
  const [resource, setResource] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (resource.data) {
      console.log("Landing Page Resources", resource?.data.results);
      setContent(resource.data.results);
    }
  }, [resource]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>GoodComics</h1>
          <SearchBar
            searchTerms={searchTerms}
            setResource={setResource}
            setSearchTerms={setSearchTerms}
          />
       

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
