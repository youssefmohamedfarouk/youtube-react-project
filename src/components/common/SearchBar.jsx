import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

// import Modal from "../Modal/Modal";

export default function SearchBar({ setVidsArray }) {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();

  function handleTextChange(event) {
    setTextInput(event.target.value);
    // console.log(textInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/searches/${textInput}`);
  }

  return (
    <div className="input-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="fa fa-search"></div>
        <input type="text" placeholder="Search" onChange={handleTextChange} />
        <div className="fa fa-times"></div>
        {/* <div className="image-wrapper">
          <img src="./search-icon.png" alt="search-icon" />
        </div> */}
      </form>
    </div>
  );
}
