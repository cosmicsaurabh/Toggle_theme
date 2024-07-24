import React from 'react';
import UseLocalStorage from "./useLocalStorage";
import "./styles.css";

export default function ToggleTheme() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);
  return (
    <div className="toggletheme-container" data-theme={theme}>
      <div className="container">
        <p>Toggle the Switch and see the MAGIC !!!</p>
        <label className="switch">
          <input type="checkbox" onChange={handleToggleTheme} checked={theme === "dark"} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
