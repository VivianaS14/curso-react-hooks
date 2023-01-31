import React, { useContext, useState } from "react";
import Characters from "./containers/Characters";
import Header from "./layout/Header";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "light" : "app"}`}>
      <Header />
      <Characters />
    </div>
  );
};

export default App;
