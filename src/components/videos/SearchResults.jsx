import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoListing from "../videos/VideoListing";
import { getSearch } from "../../api/fetch";
import "../videos/VideoListing.css";

import Modal from "../Modal/Modal";

export default function SearchResults({ vidsArray, setVidsArray }) {
  let { searchTerm } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    errorCode: "",
    errorReason: "",
    errorMessage: "",
  });
  //   let errorMessage;

  useEffect(() => {
    getSearch(searchTerm).then((data) => {
      if (data.error) {
        setShowModal(!showModal);
        setErrorMessage(
          Object.assign(structuredClone(errorMessage), errorMessage, {
            errorCode: data.error.code,
            errorReason: data.error.details[0].reason,
            errorMessage: data.error.message,
          })
        );
        console.error(data.error.message);
      }
      setVidsArray(data.items.filter((vid) => vid.id.kind === "youtube#video"));
    });
    //   .then(console.log)
    //   .catch((error) => {
    //     console.log(error);
    //     // errorMessage = error.message;
    //   });
  }, [searchTerm]);

  return (
    <>
      {/* <div>
        <button onClick={() => setShowModal(!showModal)}>Modal</button>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          Here is the Modal
        </Modal>
      </div> */}

      <div className="video-container">
        {vidsArray.map((vid) => {
          return (
            <VideoListing
              vid={vid}
              url={vid.snippet.thumbnails.medium.url}
              key={vid.id}
            />
          );
        })}
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        errorMessage={errorMessage}
      >
        {/* {errorMessage} */}
      </Modal>
    </>
  );
}
