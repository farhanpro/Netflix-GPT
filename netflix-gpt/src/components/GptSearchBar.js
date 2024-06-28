import { useRef } from 'react';
import React from 'react';
import { language } from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieNames } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const  langKey= useSelector(store => store.config.lang);
  const searchText = useRef(null);
  
  //search movietmdb and handleGptSearchClick can be converted into a custom hook. 

  const searchMovieTMDB = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+
                              movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json = await data.json(data);
                  return json.results;

  };
    const handleGptSearchClick = async () =>{
    console.log(searchText.current.value); 
    const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query : "+searchText.current.value+". only give me names of 5 movies available on Netflix,comma seprated, like the eaxmple result given ahead.  Eaxmple: Gadar,Sholay,Don,Golmaal,Koi mil gaya";
  const gptResult =  await openai.chat.completions.create({
      messages :[{role:'user',content:gptQuery}],
      model:'gpt-3.5-turbo',
    });
    if(!gptResult.choices){
      console.log("API Falied to fetch",gptResult);
    }
    console.log(gptResult.choices?.[0]?.message.content);
    const gptMovies = gptResult.choices?.[0]?.message.content.split(",");
    console.log("GPT Movies",gptMovies);
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log("tmdb Results:",tmdbResults);
    dispatch(addGptMovieNames({movieNames:gptMovies,movieResults:tmdbResults}));

  };
  return (
    <div className="pt-[55%]  md:pt-[10%] flex justify-center  rounded-lg">
        <form className="w-full md:w-1/2 bg-gray-700 grid grid-cols-12 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
           
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-lg ' 
             placeholder={language[langKey].gptSearchPlaceHolder}/>

            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick} >{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar