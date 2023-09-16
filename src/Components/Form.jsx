import { useState } from "react";
import styles from "../Components/Form.module.css";
import useFormValidation from "../hooks/useFormValidation";

function Form() {
  const { showError, showMessage, validateSubmit } = useFormValidation();
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = Object.fromEntries(new window.FormData(e.target));
    setName(name);
    validateSubmit(name, email);
  }

  return (
    <>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input name="name" type="text" />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <button type="submit">Enviar</button>
      </form>
      {showError && (
        <div className={`${styles.messageContainer} ${styles.error}`}>
          <p className={styles.errorMessage}>Campos incorrectos</p>
        </div>
      )}
      {showMessage && (
        <div className={`${styles.messageContainer} ${styles.success}`}>
          <p className={styles.successMessage}>
            Gracias {name} lo contactaremos lo antes posible.
          </p>
        </div>
      )}
    </>
  );
}
export default Form;
