import React, { useState } from "react";
import Characters from "./containers/Characters";
import Header from "./layout/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClickTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "light" : "app"}`}>
      <Header handleClickTheme={handleClickTheme} />
      <Characters darkMode={darkMode} />
    </div>
  );
};

export default App;
