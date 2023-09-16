import { useContext } from "react";
import Card from "./Card";
import styles from "../Components/UserList.module.css";
import { GlobalContext } from "../Context/globalContext";
import { useDarkMode } from "../Context/styleContext";

function UserList() {
  const { dentistState } = useContext(GlobalContext);
  const dentist = dentistState.dentistList;
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${styles.container} ${isDarkMode ? "darkTheme" : ""}`}>
        {dentist.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default UserList;
