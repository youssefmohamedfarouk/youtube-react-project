import VideoListing from "../videos/VideoListing";
import "../videos/VideoListing.css";

export default function SearchResults({vidsArray}) {
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
    </>
  );
}
