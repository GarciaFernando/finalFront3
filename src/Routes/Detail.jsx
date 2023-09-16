import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDarkMode } from "../Context/styleContext";

function Detail() {
  const [dentist, setDentist] = useState();
  const { isDarkMode } = useDarkMode();

  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  function backButton() {
    window.history.back();
  }

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setDentist(data);
      });
  }, [id]);
  return (
    <>
      <button onClick={backButton}>Back</button>
      <h1>Detalles</h1>
      <div
        className={
          isDarkMode ? "detail-container darkTheme" : "detail-container"
        }
      >
        {dentist && Object.keys(dentist).length > 0 ? (
          <table className="detail-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr key={dentist.id}>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Detail;
