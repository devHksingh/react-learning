import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import HomeLayout from "./Layout/HomeLayout";
import FormPage from "./components/FormPage";
import ShowPage from "./components/ShowPage";
import LoginPage from "./components/LoginPage";

const router = createBrowserRouter([
    {
        path:"home",
        element:<HomeLayout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            { path: "form", element: <FormPage /> },
            { path: "show", element: <ShowPage /> },
            { path: "login", element: <LoginPage /> },
        ]
    }
])

export default router