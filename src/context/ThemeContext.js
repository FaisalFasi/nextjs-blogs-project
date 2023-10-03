"use client";

import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  let storedMode =
    window !== "undefined" && localStorage.getItem("currentMode");

  const [mode, setMode] = useState(storedMode);
  // localStorage.clear();
  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("currentMode", mode);
  }, [mode]);

  const toogleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toogleMode, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
