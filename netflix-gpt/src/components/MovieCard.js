//import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath,movieName}) =>{
    //const movies = useSelector(store => store.movies);

    return (
    <div className="w-48 pr-4 ">
        <img className="border border-white" alt={movieName}  
            src={IMG_CDN_URL + posterPath }
        />
    </div>)
}

export default MovieCard;