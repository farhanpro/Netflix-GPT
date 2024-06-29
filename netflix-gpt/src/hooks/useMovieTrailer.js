import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer= ({movieId}) =>{

    //fetching the video && updating the store with trailer video data
const dispatch = useDispatch();
const trailerVideo = useSelector(store => store.movies.trailerVideo)
  const getMovieVideos = async () =>{
    console.log("this is fetting called")
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS);
    let json = await data.json();
    const filterData = json.results.filter(video => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];
 //   console.log("Videos",trailerVideo);
    dispatch(addTrailerVideo(trailer))
    };
    useEffect(() => {
      if (!trailerVideo || trailerVideo.id !== movieId) {
        getMovieVideos();
      }
    }, []);
  };

export default useMovieTrailer;