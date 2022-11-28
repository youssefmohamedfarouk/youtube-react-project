import { useState } from "react";
import { getSearch } from "../../api/fetch";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SearchBar({ setVidsArray }) {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();
  const { searchTerm } = useParams();

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
        console.error(error);
      });
    navigate(`/videos/${textInput}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search: </label>
        <input type="text" id="search-input" onChange={handleTextChange} />
      </form>
    </div>
  );
}
