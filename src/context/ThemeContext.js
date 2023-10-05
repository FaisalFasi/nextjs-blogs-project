"use client";

import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("currentMode"));

  useEffect(() => {
    const localTheme = localStorage.getItem("currentMode");
    localTheme && setMode(localTheme);
  }, [mode]);

  const toogleMode = () => {
    setMode((prev) => {
      localStorage.setItem("currentMode", prev === "dark" ? "light" : "dark");
      return prev === "dark" ? "light" : "dark";
    });
  };
  return (
    <ThemeContext.Provider value={{ toogleMode, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
