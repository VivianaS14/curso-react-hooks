import React, { useEffect, useState, useReducer, useMemo, useRef } from "react";
import Character from "../components/Character";
import "../styles/Characters.css";
import { Avatar, Badge } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import Search from "../layout/Search";

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
  const [search, setSearch] = useState([]);
  const searchInput = useRef(null);

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

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  /* const filteredUsers = characters.filter((user) =>
    user.name.toLowerCase().includes(search.toString().toLowerCase())
  ); */

  //usando useMemo para retornar los valores memoizados
  const filteredUsers = useMemo(
    () =>
      characters.filter((user) =>
        user.name.toLowerCase().includes(search.toString().toLowerCase())
      ),
    [characters, search]
  );

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
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="Characters">
        {filteredUsers.map((character) => (
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
