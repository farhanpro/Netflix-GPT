import React from 'react'
import { useNavigate } from 'react-router-dom'

const VideoTitle = ({title,overview,movieId}) => {
  const navigate = useNavigate();
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24  absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
    <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
    <div className="my-4 md:m-0">
        <button className=' bg-white rounded-lg text-black p-2 md:py-4 md:px-12 px-12 text-xl hover:bg-opacity-50'onClick={()=>navigate(`/videoPlayer/${movieId}`)}> ▶️ Play</button>
        <button className='hidden md:inline-block mx-2 bg-white rounded-lg text-black p-4 px-12 text-xl hover:bg-opacity-50'> ℹ More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle