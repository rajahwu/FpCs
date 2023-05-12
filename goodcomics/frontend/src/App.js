import { MARVEL_API_KEY } from "./utils/marvelAPI";
import { useState, useEffect } from "react";

import "./App.css";

async function getMarvelResource(searchTerm) {
  const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&${MARVEL_API_KEY}`)
  .then(data => data.json())
  return data
}


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [resource, setResource] = useState({})
  const [content, setContent] = useState([])

  useEffect(() => {
    if(resource.data){ 
      console.log("useEffect resource", resource?.data?.results)
      setContent(resource.data.results)
    }
  },[resource])
  
  function handleClick(e) {
    e.preventDefault()
    getMarvelResource(searchTerm).then(data => setResource(data))
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
          onChange={e => setSearchTerm(e.target.value)} />
          <button onClick={handleClick}>Search</button>
        </form>
        <ul style={{listStyle: "none"}}>
        {content.map(entry => <li key={entry.id} >{entry.name}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
