import Form from "../Components/Form";
function Contact() {
  function backButton() {
    window.history.back();
  }

  return (
    <>
      <button onClick={backButton}>Back</button>
      <Form />
    </>
  );
}
export default Contact;
