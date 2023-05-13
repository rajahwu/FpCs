import { MARVEL_API_KEY } from "../utils/marvelAPI";

const baseUrl = `https://gateway.marvel.com:443/v1/public/`

export async function getMarvelCharacters(searchTerms) {
   const urlParams = getParams(searchTerms)
    const data = await fetch(
        `${baseUrl}characters?${urlParams.startsWith}&${MARVEL_API_KEY}`
        ).then((data) => data.json());
        return data;
    }

export async function getMarvelCharactersById(characterId) {
    const data = await fetch(
        `${baseUrl}/characters/${characterId}?${MARVEL_API_KEY}`
    ).then((data) => data.json())
    return data
}
    
function getParams(searchTerms){
    const urlParams = {}
    if (searchTerms.startsWith) {
        urlParams.startsWith = `nameStartsWith=${searchTerms.startsWith}`
    } else {
        urlParams.startsWith = `nameStartsWith=spider`
    }
    return urlParams
  }
  