import Header from "./Header";
import {useRef, useState} from "react";
import {checkValidData} from "../utils/validate";
import {createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG, NETFLIX_SRC_SET, USER_AVATAR } from "../utils/constants";


const Login =  ()=>{

    const [isSingInForm,setIsSingInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    //const navigate = useNavigate();
    const dispatch = useDispatch();
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
      if(message) return;
      //SignIn SignUp  Logic
      if(!isSingInForm)
        {
            //Signup logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value , photoURL: USER_AVATAR
                  }).then(() => {
                    // Profile updated!
                    // ...
                    const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                    //console.log("This is the User := ",user);
                    
                  }).catch((error) => {
                    // An error occurred
                    // ...
                    setErrorMessage(error.message);
                  });
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              //  console.log(errorCode,errorMessage);
                setErrorMessage(errorCode+" "+errorMessage);
                // ..
            });
        }
        else
        {
            //SignIn logic
            const auth = getAuth();
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   // console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+" " + errorMessage);
    setErrorMessage(errorCode+ + errorMessage);
  });
        }   
      };

    return(
    <div>
    <Header/>
   <div className="absolute">
   <img className="h-screen object-cover md:h-auto" alt="Backgroundimage"  src={NETFLIX_BG} srcSet={NETFLIX_SRC_SET}></img>
   </div>

   <form onSubmit={(e)=>e.preventDefault()} className="md:w-3/12  p-12 bg-black opacity-90 mt-36 mx-auto right-0 left-0 text-white rounded-2xl fixed">
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