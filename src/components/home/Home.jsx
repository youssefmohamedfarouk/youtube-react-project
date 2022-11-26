import { useEffect, useState } from "react";
// import YouTube from "react-youtube";
import { getMostPopular } from "../../api/fetch";

import Modal from "../Modal/Modal";

import VideoListing from "../videos/VideoListing";
import "../videos/VideoListing.css"

export default function Home() {
  const [popularVids, setPopularVids] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getMostPopular().then((data) => setPopularVids(data.items));
  }, []);

  return (
    <>
      <div>
        <label htmlFor="searchTitle">
          Search Shows:
          {/* <input
          type="text"
          value={searchTitle}
          id="searchTitle"
          onChange={handleTextChange}
        /> */}
          <button onClick={() => setShowModal(!showModal)}>Modal</button>
        </label>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          Here is the Modal
        </Modal>
      </div>
      <div className="VideoListing" >
        {popularVids.map((vid) => {
          return (
            <VideoListing
              vid={vid}
              url={vid.snippet.thumbnails.high.url}
              key={vid.id}
            />
          );
        })}
      </div>
      ;
    </>
  );
}
