import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BG, NETFLIX_SRC_SET } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
    <div className="absolute -z-10">
   <img alt="Backgroundimage"  src={NETFLIX_BG} srcset={NETFLIX_SRC_SET}></img>
   </div>
   <GptSearchBar/>
   <GptMovieSuggestion/>

    </div>
  )
}

export default GptSearch