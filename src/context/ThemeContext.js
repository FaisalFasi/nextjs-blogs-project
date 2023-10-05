"use client";
import React from "react";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  //  useEffect(() => {
  //   const localTheme = localStorage.getItem("currentMode");
  //   localTheme && setMode(localTheme);
  // }, [mode]);

  const toogleMode = () => {
    setMode((prev) => {
      // localStorage.setItem("currentMode", prev === "dark" ? "light" : "dark");
      return prev === "dark" ? "light" : "dark";
    });
  };
  return (
    <ThemeContext.Provider value={{ toogleMode, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
