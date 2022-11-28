import { useEffect} from "react";
// import YouTube from "react-youtube";
import { getMostPopular } from "../../api/fetch";

import VideoListing from "../videos/VideoListing";
import "../videos/VideoListing.css";

export default function Home({vidsArray, setVidsArray}) {
 

  useEffect(() => {
    setVidsArray([]);
    getMostPopular().then((data) => setVidsArray(data.items));

  }, [setVidsArray]);

  return (
    <>
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
