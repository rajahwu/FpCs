import { marvalAPIKeys, apiUrlParam } from "./utils/marvelAPI";
import { useState, useEffect } from "react";

import "./App.css";



function App() {
  useEffect(() => {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&${apiUrlParam}`)
    .then(data => data.json())
    .then(data => console.log(data))
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>GoodComics</p>
      </header>
    </div>
  );
}

export default App;
