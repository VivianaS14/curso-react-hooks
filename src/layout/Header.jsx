import React from "react";
import "../styles/Header.css";

const Header = ({ handleClickTheme }) => {
  return (
    <div className="header">
      <h1>API Characters</h1>
      <label className="switch">
        <input type="checkbox" onClick={handleClickTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Header;
