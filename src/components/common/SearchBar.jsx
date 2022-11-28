import { useState } from "react";
import { getSearch } from "../../api/fetch";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

export default function SearchBar({ setVidsArray }) {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  let errorMessage;

  function handleTextChange(event) {
    setTextInput(event.target.value);
    // console.log(textInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getSearch(textInput)
      .then((data) => setVidsArray(data.items))
      //   .then(console.log)
      .catch((error) => {
        setShowModal(!showModal)
        errorMessage = error.message;
        console.error(error);
      });
    navigate(`/searches/${textInput}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search: </label>
        <input type="text" id="search-input" onChange={handleTextChange} />
        <button> Search </button>
      </form>
      <div>
        <button onClick={() => setShowModal(!showModal)}>Modal</button>
      </div>
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {errorMessage}
        </Modal>
      )}
    </div>
  );
}
