import { ContentCard } from "../../components";
import { Link, useParams } from "react-router-dom";
import { getMarvelCharactersById } from "../../resources/marvel";
import { useEffect, useState } from "react";

export default function CharacterPage() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    // console.log("character", character);
    getMarvelCharactersById(id).then((data) =>
      setCharacter(data?.data.results[0])
    );
  }, []);

  // console.log("character", character?.stories);
  return (
    character?.id && (
      <div style={{ backgroundColor: "#282c34" }}>
        <Link style={{ color: "yellow", textDecoration: "none" }} to="/home">
          Home
        </Link>
        <ContentCard
          id={character.id}
          titel={character.name}
          imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          description={character.description}
          urls={character.urls}
        />
        <div style={{ display: "flex" }}>
          <ul style={{ listStyle: "none", color: "white" }}>
            <p>Series {character?.series.available}</p>
            {character?.series.items.map((entry) => (
              <li key={character.series.items.indexOf(entry)}>{entry.name}</li>
            ))}
          </ul>
          <ul style={{ listStyle: "none", color: "white" }}>
            <p>Stories {character?.stories.available}</p>
            {character?.stories.items.map((entry) => (
              <li key={character.stories.items.indexOf(entry)}>
                {entry.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}
