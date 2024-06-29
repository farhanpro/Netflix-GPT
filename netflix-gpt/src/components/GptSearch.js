import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BG, NETFLIX_SRC_SET } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10"> 
    <img className="h-screen object-cover md:h-auto" alt="Backgroundimage"  src={NETFLIX_BG} srcSet={NETFLIX_SRC_SET}></img>
    </div>
    <div className=""> <GptSearchBar/><GptMovieSuggestion/></div>
    </>
  )
}

export default GptSearch