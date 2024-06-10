import Header from "./Header";
import {useRef, useState} from "react";
import { checkValidData } from "../utils/validate";


const Login =  ()=>{

    const [isSingInForm,setIsSingInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSingUp = () =>{
        setIsSingInForm(!isSingInForm);
    };

    const handleButtonClick = () =>{
        //Validate the form data
      const message =  checkValidData(email.current.value,password.current.value)
        setErrorMessage(message);
    };

    return(
    <div>
    <Header/>
   <div className="absolute">
   <img alt="Backgroundimage"  src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"></img>
   </div>

   <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black opacity-90 mt-64 mx-auto right-0 left-0 text-white rounded-2xl">
   <h1 className="font-bold text-3xl py-4">{isSingInForm === true ? "Sign In" : "Sing Up"}</h1>
   {!isSingInForm && <input ref={name} type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-600 rounded-lg"/>}
    <input ref={email} type="text" placeholder="Email or phone number" className="p-4 my-4 bg-gray-600 w-full rounded-lg"/>
    <input ref={password}  type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600 rounded-lg"/>
    
    <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

    <button className="py-4 my-6 bg-red-700 rounded-lg w-full" onClick={handleButtonClick}>{isSingInForm === true ? "Sign In" : "Sing Up"}</button>
    <p className="py-6 cursor-pointer" onClick={toggleSingUp}>{isSingInForm === true ? "New to Netflix Sigup Now" : "Already registered ? Sign-in now"}</p>
   </form>
   
    </div>)
}

export default Login;