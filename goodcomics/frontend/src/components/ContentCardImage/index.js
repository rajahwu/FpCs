import { useNavigate } from "react-router-dom";
import { getMarvelCharactersById } from "../../resources/marvel";

export default function ContentCardImage({ imageUrl, contentId }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    getMarvelCharactersById(contentId)
      .then((data) => console.log(data.data.results[0]))
    return navigate(`/characters/${contentId}`);
  };

  return (
    <img
      style={{ borderRadius: "5px" }}
      className="card-image"
      src={imageUrl}
      alt=""
      width={150}
      height={150}
      onClick={handleClick}
    />
  );
}
