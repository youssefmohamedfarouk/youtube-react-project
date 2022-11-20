import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import { getOneVideo } from "../../api/fetch";
import YouTube from "react-youtube";

export default function Video(){
    const [video, setVideo] = useState({});
    const {id} = useParams();

    console.log(id);
    useEffect(() => {
        getOneVideo(id)
        .then(response => {
            setVideo(response);
        })
    },[]
    )

    return(
        <YouTube videoId={id} origin={"http://localhost:3000"} />
    );
}