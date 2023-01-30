import React, { useContext, useState } from "react";
import Characters from "./containers/Characters";
import themeContext from "./context/ThemeContext";
import Header from "./layout/Header";

const App = () => {
  const theme = useContext(themeContext);

  return (
    <div className={`${theme ? "light" : "app"}`}>
      <Header />
      <Characters />
    </div>
  );
};

export default App;
