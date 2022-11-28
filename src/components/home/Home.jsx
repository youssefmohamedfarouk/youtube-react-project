import { useEffect, useState } from "react";
// import YouTube from "react-youtube";
import { getMostPopular } from "../../api/fetch";

import Modal from "../Modal/Modal";

import VideoListing from "../videos/VideoListing";
import "../videos/VideoListing.css";

export default function Home({vidsArray, setVidsArray}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setVidsArray([]);
    getMostPopular().then((data) => setVidsArray(data.items));

  }, []);

  return (
    <>
      <div>
        <button onClick={() => setShowModal(!showModal)}>Modal</button>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          Here is the Modal
        </Modal>
      </div>
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
    </>
  );
}
