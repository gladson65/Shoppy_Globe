import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import LandingPage from './Components/LandingPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from 'react';

// lazy loading
const App = lazy(()=> import("./App"));
const ProductList = lazy(()=> import("./Components/ProductList"));
const ProductDetails = lazy(()=> import("./Components/ProductDetails"));
const Cart = lazy(()=> import("./Components/Cart"));
const Beauty = lazy(()=> import("./Components/Beauty"));
const Fragrance = lazy(()=> import("./Components/Fragrances"));
const Grocery = lazy(()=> import("./Components/Grocery"));
const Furniture = lazy(()=> import("./Components/Furniture"));
const Error = lazy(()=> import("./Components/Error"));

// creating appRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Suspense>
              <App />
             </Suspense>,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },

      {
        path: "/productList",
        element: <Suspense>
                  <ProductList /> 
                 </Suspense>
      },

      {
        path: "/product/details/:id",
        element: <Suspense>
                  <ProductDetails />
                 </Suspense>
      },
      {
        path: "/cart",
        element: <Suspense>
                  <Cart />
                 </Suspense>
      },
      {
        path: "/beauty/products",
        element: <Suspense><Beauty /></Suspense>
      },
      {
        path: "/fragrance/products",
        element: <Suspense><Fragrance/></Suspense>
      },
      {
        path: "/grocery/products",
        element: <Suspense><Grocery /></Suspense>
      },
      {
        path: "/furniture/products",
        element: <Suspense><Furniture /></Suspense>
      }
    ],

    errorElement: <Suspense><Error/></Suspense>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
