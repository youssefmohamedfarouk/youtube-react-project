import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getOneVideo } from "../../api/fetch";
import YouTube from "react-youtube";
import moment from "moment";
import he from "he";

import "./Video.css";

export default function Video() {
  const [videoObj, setVideoObj] = useState({});
  const { id } = useParams();
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });

  //   console.log(id);
  useEffect(() => {
    getOneVideo(id)
      .then((response) => {
        console.log(response);
        setVideoObj(response);
        // setUploaded(response.items[0].snippet.publishedAt)
        // console.log(videoObj);
      })
      .then(console.log(videoObj))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="vid-container">
      <YouTube
        videoId={id}
        origin={"http://localhost:3000"}
        className="youtube-vid"
      />
      <div className="vid-details">
        <h3>{videoObj.items && videoObj.items[0].snippet.title}</h3>
        <p>{videoObj.items && videoObj.items[0].snippet.channelTitle}</p>
        <p>
          {videoObj.items && formatter.format(videoObj.items[0].statistics.viewCount)} views •{" "}
          {videoObj.items &&
            moment(videoObj.items[0].snippet.publishedAt).fromNow()}
        </p>
      </div>
    </div>
  );
}
