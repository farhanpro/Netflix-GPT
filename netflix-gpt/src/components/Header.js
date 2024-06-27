import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () =>{
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const isGptOn = useSelector(store => store.gpt);
    console.log(isGptOn,"is gpt on");

    const handleSignOut = () =>
    {
        signOut(auth).then(() => {
            // Sign-out successful.
            
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });  
    }

    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
          } else {
            // User is signed out
            // ...
            dispatch(removeUser())
            navigate("/");
           
          }
        });
        //Unsubscribe will be called when componenet unmounts.
        return () => unsubscribe();
  },[]);

  const handleGptSearchClick = () =>{
    //toggle the gpt search
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e) =>{
   dispatch(changeLanguage(e.target.value));
  }

    return (
        <div className="px-8 w-screen py-2 bg-gradient-to-b from-black z-10 fixed flex justify-between"> 
       <img className="w-44 " src={LOGO} alt="logo"/>
       {user !== null ? <div className="flex justify-evenly p-2">

        {isGptOn.showGptSearch && <select className="m-2 px-4 bg-gray-800 text-white border-none rounded-full" onChange={handleLanguageChange}>
       {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
       </select>}
       

        <button onClick={handleGptSearchClick} className={`${isGptOn.showGptSearch===true?'bg-red-700 hover:bg-red-500':'bg-gray-700 hover:bg-gray-500'}  border-none rounded-full text-white m-2 px-4`}>{isGptOn.showGptSearch  ?"Homepage":"GPT Search"}</button>
        <img className="w-12 h-12 mt-2 " alt="usericon" src={user.photoURL}/>
        {/* <img className="w-12 h-12 mt-2 " alt="usericon" src="https://occ-0-3081-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png"/> */}
        <button onClick={handleSignOut} className="bg-red-700 hover:bg-red-500 border-none rounded-full text-white m-2 p-2">Sign Out</button>
       </div> :<div></div>}
       
       </div>)
}

export default Header;