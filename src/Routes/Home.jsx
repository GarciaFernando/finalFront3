import UserList from "../Components/UserList";
import { useDarkMode } from "../Context/styleContext";

function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <h1 className={isDarkMode ? "darkTheme" : ""}>Lista de Dentistas</h1>
      <UserList />
    </>
  );
}

export default Home;
