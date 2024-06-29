//import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
//import VideoBackground from "./VideoBackground";
import { useNavigate } from "react-router-dom";
//import VideoBackground from "./VideoBackground";


const MovieCard = ({posterPath,movieName,moviedata}) =>{
   const navigate = useNavigate();
  
    //const movies = useSelector(store => store.movies);
   
    const handleVideoPlayer = () => {
      navigate(`/videoPlayer/${moviedata.id}`)
    };

    if(!posterPath) return 
    return (
    <div className="w-36 md:w-48 pr-4 ">
        <img className="border border-white" alt={movieName}  
            src={IMG_CDN_URL + posterPath }
            onClick={handleVideoPlayer}
            //onClick={()=>{}}
        />
    </div>)
}

export default MovieCard;