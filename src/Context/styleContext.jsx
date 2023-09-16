import { createContext, useContext, useState } from "react";

export const styleContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }
  return (
    <styleContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </styleContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(styleContext);
  if (!context) {
    throw new Error("No es posible usar el darkMode aqui");
  }
  return context;
}
