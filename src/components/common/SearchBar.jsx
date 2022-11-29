import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

// import Modal from "../Modal/Modal";

export default function SearchBar({ setVidsArray }) {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();
  //   const [showModal, setShowModal] = useState(false);
  //   let errorMessage;

  function handleTextChange(event) {
    setTextInput(event.target.value);
    // console.log(textInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // getSearch(textInput)
    //   .then((data) => setVidsArray(data.items))
    //   //   .then(console.log)
    //   .catch((error) => {
    //     setShowModal(!showModal)
    //     errorMessage = error.message;
    //     console.error(error);
    //   });
    navigate(`/searches/${textInput}`);
  }

  return (
    <div className="input-wrapper">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="search-input">Search: </label>
        <input type="text" id="search-input" onChange={handleTextChange} />
        <button> Search </button> */}
        <div className="fa fa-search"></div>
        <input type="text" placeholder="Search" onChange={handleTextChange}/>
        <div className="fa fa-times"></div>
      </form>
      <div>
        {/* <button onClick={() => setShowModal(!showModal)}>Modal</button> */}
      </div>
    </div>
  );
}

{/* <div class="input-wrapper">
  <div class="fa fa-search"></div>
  <input type="text" placeholder="Search" />
  <div class="fa fa-times"></div>
</div>; */}
