import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () =>{
    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const handleSignOut = () =>
    {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });  
    }

    return (
        <div className="px-8 w-screen py-2 bg-gradient-to-b from-black z-10 fixed flex justify-between"> 
       <img className="w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
       {user !== null ? <div className="flex justify-evenly p-2">
        <img className="w-12 h-12 mt-2 " alt="usericon" src={user.photoURL}/>
        {/* <img className="w-12 h-12 mt-2 " alt="usericon" src="https://occ-0-3081-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png"/> */}
        <button onClick={handleSignOut} className="bg-red-700 hover:bg-red-500 border-none rounded-full text-white m-2 p-2">Sign Out</button>
       </div> :<div></div>}
       
       </div>)
}

export default Header;