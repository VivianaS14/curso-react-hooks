import React, { useContext } from "react";
import "../styles/Header.css";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="header">
      <h1>API Characters</h1>
      <label className="switch">
        <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Header;
