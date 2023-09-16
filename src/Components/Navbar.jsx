import { Link } from "react-router-dom";
import { useDarkMode } from "../Context/styleContext";
import { useEffect } from "react";

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("darkTheme");
    } else {
      document.body.classList.remove("darkTheme");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className={isDarkMode ? "darkTheme" : "lightTheme"}>
        <Link to="/">Dentistas</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Favoritos</Link>
        <button onClick={toggleDarkMode}> Dark/light Mode</button>
      </div>
    </>
  );
}

export default Navbar;
