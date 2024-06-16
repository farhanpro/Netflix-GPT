import React from 'react';
//import { API_OPTIONS } from '../utils/constants';
import {useSelector} from  "react-redux";
//import { addTrailerVideo } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  useMovieTrailer({movieId});
  

    return (
    <div className="w-screen ">
      <iframe  className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1"} 
      title="YouTube video player"  
      allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>
    </div>
  )
}

export default VideoBackground