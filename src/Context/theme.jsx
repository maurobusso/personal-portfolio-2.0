import React, { useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();


//swapped dark-light values to set default theme as dark
const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = useState("dark");
  const toggeltheme = () => {
    themename === "dark" ? setthemename("light") : setthemename("dark");
  };

  return (
    <ThemeContext.Provider value={[{ themename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
