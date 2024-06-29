import React from 'react';
//import { API_OPTIONS } from '../utils/constants';
import {useSelector} from  "react-redux";
//import { addTrailerVideo } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useParams,useNavigate } from "react-router-dom";

const VideoBackground = ({ movieId }) => {
  const { movieIdPlayer } = useParams();
  const navigate = useNavigate();
  console.log("Movie id player", movieIdPlayer);

  useMovieTrailer({ movieId: movieIdPlayer || movieId });

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  return (
    <div div className={`${movieIdPlayer ? 'h-screen bg-black' : ''}`}>
    {
      movieIdPlayer && 
      <div className="my-4 md:m-0">
      <button 
      className=' fixed bg-white rounded-lg text-black p-2 mt-4 mx-4 md:py-4 md:px-12 px-12 text-xl hover:bg-opacity-50' 
      onClick={()=>{navigate('/browse')}}> ⬅️ back</button>
      </div>
      }
   
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}${movieIdPlayer?'':'?&autoplay=1&mute=1'}`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};


export default VideoBackground