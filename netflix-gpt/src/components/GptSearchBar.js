import React from 'react'
import { language } from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const  langKey= useSelector(store => store.config.lang);
  console.log("langKey",langKey);
  return (
    <div className="pt-[10%] flex justify-center  rounded-lg">
        <form className="w-1/2 bg-gray-700 grid grid-cols-12 rounded-lg" >
           
            <input type="text" className='p-4 m-4 col-span-9 rounded-lg ' 
             placeholder={language[langKey].gptSearchPlaceHolder}/>

            <button className="col-span-3    m-4 py-2 px-4 bg-red-700 text-white rounded-lg ">{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar