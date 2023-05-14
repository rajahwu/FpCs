import { useState, useEffect } from "react";
import { ContentCard, NewsFeed } from "../../components";
import { getMarvelCharacters } from "../../resources/marvel";

const SearchBar = ({ searchTerms, setSearchTerms, setResource, setContent, update, setUpdate }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const setSearchData = async () => {
      await getMarvelCharacters(searchTerms)
      .then((data) => setResource(data))
      .then((resource) => setContent(resource?.data.results))
      setUpdate(!update)
    };
    console.log("seachTearms", searchTerms.startsWith)
    setSearchData();
  };

  return (
    <form>
      {/* <p>Search Characters</p> */}
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

export default function HomePage() {
  const [searchTerms, setSearchTerms] = useState({});
  const [resource, setResource] = useState([]);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    console.log("useEffect running")
    const setResourseData = async () => {
      setIsLoading(true)
      await getMarvelCharacters().then((data) => setResource(data));
      if (resource.data) {
        console.log("Landing Page Resources", resource?.data.results);
        setContent(resource.data.results);
       return setIsLoading(false)
      }
    };
    setResourseData();
  }, [update]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ opacity: 0.9 }}>
          <span
            style={{
              fontSize: "1.8rem",
              // color: "yellow",
              opacity: 0.9,
              textShadow: "5px 5px 2px black",
            }}
          >
            The
          </span>{" "}
          Comic{" "}
          <span
            style={{
              fontSize: "3.3rem",
              color: "yellow",
              opacity: 0.85,
              textShadow: "5px 5px 2px black",
            }}
          >
            Stand
          </span>{" "}
          <span
            style={{
              fontSize: "1.8rem",
              // color: "yellow",
              opacity: 0.9,
              textShadow: "5px 5px 2px black",
            }}
          >
            Club
          </span>{" "}
        </h1>
        <SearchBar
          searchTerms={searchTerms}
          setResource={setResource}
          setSearchTerms={setSearchTerms}
          setContent={setContent}
          setUpdate={setUpdate}
          update={update}
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
      <NewsFeed />
    </div>
  );
}
