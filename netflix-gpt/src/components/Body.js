import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import VideoBackground from "./VideoBackground";


const Body = () =>{
 

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/videoPlayer/:movieIdPlayer",
            element:<VideoBackground/>
        }
    ]);

    

    return(
    <div>
    <RouterProvider router={appRouter}/>
    </div>)
}

export default Body;