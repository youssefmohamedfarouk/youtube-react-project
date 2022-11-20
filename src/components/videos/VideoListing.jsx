import {Link} from 'react-router-dom';

export default function VideoListing({vid, url}) {
    console.log(vid)
    return (
        <div >
            <Link to={`/videos/${vid.id}`} > 
                <img src={url} alt={`${vid.id}_img`} ></img>
            </Link>
            
        </div>
    )
}