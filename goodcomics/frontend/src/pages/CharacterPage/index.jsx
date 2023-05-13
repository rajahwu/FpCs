import { ContentCard } from "../../components";
import { Link, useParams } from "react-router-dom";
import { getMarvelCharactersById } from "../../resources/marvel";
import { useEffect, useState } from "react";

export default function CharacterPage() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    getMarvelCharactersById(id)
      .then((data) => setCharacter(data?.data.results[0]))
  }, [id]);

  
  return (
    character.id && (
      <div style={{ backgroundColor: "#282c34" }}>
        <ContentCard
          id={character.id}
          titel={character.name}
          imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          description={character.description}
          urls={character.urls}
        />
        <Link style={{ color: "yellow" }} to="/">
          Back
        </Link>
      </div>
    )
  );
}
