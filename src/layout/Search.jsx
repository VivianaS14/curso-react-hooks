import React, { useContext } from "react";
import "../styles/Search.css";
import { ThemeContext } from "../context/ThemeContext";

const Search = ({ search, handleSearch, searchInput }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="input-search">
      <input
        type="text"
        name="text"
        className={darkMode ? "input-light" : "input"}
        placeholder="Search Name"
        value={search}
        onChange={handleSearch}
        ref={searchInput}
      />
    </div>
  );
};

export default Search;
