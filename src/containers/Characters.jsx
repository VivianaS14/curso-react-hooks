import React, { useEffect, useState } from "react";
import Character from "../components/Character";
import "../styles/Characters.css";

const Characters = ({ darkMode }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => (
        <Character
          key={character.id}
          image={character.image}
          name={character.name}
          location={character.location.name}
          species={character.species}
          gender={character.gender}
          status={character.status}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

export default Characters;
