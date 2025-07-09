import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes  from './Routes';
import { CartProvider } from "./CartContext"; 


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(Routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);
