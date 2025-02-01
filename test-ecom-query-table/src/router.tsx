import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import App from "./App";
import SingleProduct from "./components/SingleProduct";
import Order from "./components/Order";
import WishList from "./components/WishList";
import Cart from "./components/Cart";

const router = createBrowserRouter([
    {
        path :"",
        element:<HomeLayout/>,
        children:[
            {
                path:"",
                element:<App/>
            },
            {
                path:"/:productId",
                element:<SingleProduct/>
            },
            {
                path:"/order",
                element:<Order/>
            },
            {
                path:"/wishList",
                element:<WishList/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ]
    }
])

export default router