import {Link} from 'react-router-dom';

import "./VideoListing.css";

export default function VideoListing({vid, url}) {

    return (
        <div className="videoDescrip">
            <Link to={`/videos/${vid.id}`} > 
                <img src={url} alt={`${vid.id}_img`} ></img>
            </Link>
            
        </div>
    )
}