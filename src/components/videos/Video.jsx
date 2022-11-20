import {useParams} from "react-router-dom";
import {useEffect} from "react";

import { getOneVideo } from "../../api/fetch";

export default function Video(){

    const {id} = useParams()

    console.log(id);
    useEffect(() => {
        getOneVideo(id)
        .then(console.log)
    }
    )
    return(
        ""
    );
}