import { useEffect } from "react";
// import YouTube from "react-youtube";
import { getMostPopular } from "../../api/fetch";

import VideoListing from "../videos/VideoListing";
import "../videos/VideoListing.css";

export default function Home({ vidsArray, setVidsArray }) {
  useEffect(() => {
    setVidsArray([]);
    getMostPopular().then((data) => {
      console.log(data);
      setVidsArray(data.items.filter((vid) => vid.kind === "youtube#video"));
    });
  }, []);

  return (
    <>
      <div className="video-container">
        {vidsArray.map((vid) => {
          //   console.log(vid);
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
