import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/Header.css";

const Header = () => {
  const theme = useContext(ThemeContext);
  const [darkMode, setdarkMode] = useState(theme);

  return (
    <div className="header">
      <h1>API Characters</h1>
      <label className="switch">
        <input type="checkbox" onClick={() => setdarkMode(!darkMode)} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Header;
