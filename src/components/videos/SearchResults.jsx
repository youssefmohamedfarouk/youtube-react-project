import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoListing from "../videos/VideoListing";
import { getSearch } from "../../api/fetch";
import "../videos/VideoListing.css";

import Modal from "../Modal/Modal";

export default function SearchResults({ vidsArray, setVidsArray }) {
  let { searchTerm } = useParams();
  const [showModal, setShowModal] = useState(false);
  let errorMessage;

  useEffect(() => {
    getSearch(searchTerm)
      .then((data) => setVidsArray(data.items))
      //   .then(console.log)
      .catch((error) => {
        setShowModal(!showModal);
        errorMessage = error.message;
        console.error(error);
      });
  }, []);
  
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
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {errorMessage}
        </Modal>
      )}
    </>
  );
}
