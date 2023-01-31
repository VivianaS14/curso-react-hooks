import React, { useEffect, useState, useReducer } from "react";
import Character from "../components/Character";
import "../styles/Characters.css";
import { Avatar, Badge } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const initialState = {
  favorites: [],
};

//Reducer
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleFavorite = (favorite) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: favorite,
    });
  };

  return (
    <>
      <div className="favorites">
        {state.favorites.map((favorite) => (
          <Badge
            key={favorite.id}
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<Favorite color="error" />}
          >
            <Avatar
              alt={favorite.name}
              src={favorite.image}
              sx={{ width: 70, height: 70 }}
            />
          </Badge>
        ))}
      </div>
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
            handleFavorite={() => handleFavorite(character)}
          />
        ))}
      </div>
    </>
  );
};

export default Characters;
