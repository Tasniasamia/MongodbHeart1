import React from 'react';
import {
    createBrowserRouter
    
  } from "react-router-dom";
import HomeLayout from '../Components/Layout/HomeLayout';
import Home from '../Components/Pages/Home/Home';
import Login_Resister_Layout from '../Components/Layout/Login_Resister_Layout';
import Login from '../Components/Pages/Home/Login';
import Resister from '../Components/Pages/Home/Resister';
import Booking from '../Components/Pages/Home/Booking/Booking';
import Bookingdata from '../Components/Pages/Home/Bookingdata/Bookingdata';
import PrivateRoute from '../Components/Pages/Shared/PrivateRoute/PrivateRoute';

    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomeLayout></HomeLayout>,
          children:[
            {
              path:"/",
              element:<Home></Home>,
              
            },{
              path:'/booking/:id',
              element:<Booking></Booking>,
              loader:({params})=>fetch(`http://localhost:3200/Cars/${params.id}`)
            },{
              path:"/bookdata",
              element:<PrivateRoute><Bookingdata></Bookingdata></PrivateRoute>,
          
            }
          ]
        },{
          path:"/Resister_login",
          element:<Login_Resister_Layout></Login_Resister_Layout>,
          children:[
            {
              path:"/Resister_login/Login",
              element:<Login></Login>
            },{
              path:"/Resister_login/Resister",
              element:<Resister></Resister>,
            }

          ]
        }
      ]);
   


export default router;