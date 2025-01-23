import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Products.jsx";
import Product from "./Product.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querClient = new QueryClient();
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
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={querClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
