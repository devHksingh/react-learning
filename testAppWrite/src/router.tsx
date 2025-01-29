import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import HomeLayout from "./Layout/HomeLayout";



const router = createBrowserRouter([
    {
        path:"home",
        element:<HomeLayout/>,
        children:[
            {
                path:"",
                element:<Home/>
            }
        ]
    }
])

export default router