import { useState } from "react";

function useFormValidation() {
  const [showError, setShowError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  function validateSubmit(name, email) {
    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (name.length < 5 || !regex.test(email)) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }
  return {
    showError,
    showMessage,
    validateSubmit,
  };
}
export default useFormValidation;
