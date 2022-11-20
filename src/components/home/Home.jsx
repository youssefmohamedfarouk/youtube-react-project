import { useEffect, useState } from "react";
// import YouTube from "react-youtube";
import { getMostPopular } from "../../api/fetch";

import VideoListing from "../videos/VideoListing";


export default function Home() {
  const [popularVids, setPopularVids] = useState([]);

  useEffect(() => {
    getMostPopular().then((data) => setPopularVids(data.items));
  }, []);

  console.log(popularVids);

  return <div>{popularVids.map(vid => {
    return(
        <VideoListing vid={vid} url={vid.snippet.thumbnails.high.url} key={vid.id}/>

    )
  })}</div>;
}
