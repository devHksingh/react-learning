import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Products.jsx";
import Product from "./Product.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Parallel from './Parallel.jsx';
// import Optimistic from './optimistic.jsx';
import Dependant from './Dependant.jsx';
import Paginated from './Paginated.jsx';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20*1000,
    },
    
  },
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
  {
    path: 'paginated',
    element: <Paginated />,
},
{
    path: 'parallel',
    element: <Parallel />,
},
// {
//     path: 'optimistic',
//     element: <Optimistic />,
// },
{
    path: 'dependant',
    element: <Dependant />,
},
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
