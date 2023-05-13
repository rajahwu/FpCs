import { getMarvelCharactersById } from "../../resources/marvel"


export default function ContentCardImage({imageUrl, contentId}) {
    const handleClick = (e) => {
       const data = getMarvelCharactersById(contentId)
       .then((data) => console.log(data.data.results[0]))
       return data
        
    }
    return (
        <img
        style={{borderRadius:"5px"}}
        className="card-image"
        src={imageUrl}
        alt=""
        width={150}
        height={150}
        onClick={handleClick}
      />
    )
}