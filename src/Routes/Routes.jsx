import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import OurShop from "../Pages/OurShop/Ourshop";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/shop/:category",
          element:<OurShop></OurShop>,
        },
      ]
    },
  ]);