import { Link } from "react-router-dom";
import moment from "moment";
import he from "he";

import "./VideoListing.css";

export default function VideoListing({ vid, url }) {
  const uploaded = moment(vid.snippet.publishedAt).fromNow();
  //   console.log(vid);

  return (
    <div className="videoDescrip">
      <Link to={`/videos/${vid.id.videoId || vid.id}`}>
        <img src={url} alt={`${vid.id}_img`}></img>
        <div>
          <h3>{he.decode(vid.snippet.title)}</h3>
        </div>
      </Link>
      <p>
        {he.decode(vid.snippet.channelTitle)} • {uploaded}
      </p>
    </div>
  );
}
