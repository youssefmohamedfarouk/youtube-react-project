import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { getMostPopular } from "../../api/fetch";

import Video from "../videos/Video";


export default function Home() {
  const [popularVids, setPopularVids] = useState([]);

  useEffect(() => {
    getMostPopular().then((data) => setPopularVids(data.items));
  }, []);

//   console.log(popularVids);

  return <div>{popularVids.map(vid => {
    return(
        <Video url={vid.snippet.thumbnails.high.url}/>
    )
  })}</div>;
}
