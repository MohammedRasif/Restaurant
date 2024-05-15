import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/AllItem/Root.jsx';
import ErrorPage from './component/AllItem/ErrorPage.jsx';
import Home from './component/AllItem/Home.jsx';
import Booking from './component/AllItem/Booking.jsx';
import Login from './component/AllItem/Login.jsx';
import Register from './component/AllItem/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import MyList from './component/AllItem/MyList.jsx';
import { Toaster } from 'react-hot-toast';
import BookingDetails from './component/AllItem/BookingDetails.jsx';
import Conform from './component/AllItem/Conform.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
      ,
      {
        path:"/booking",
        element:<Booking></Booking>
      }
      ,
      {
        path:"/login",
        element:<Login></Login>
      }
      ,
      {
        path:"/register",
        element:<Register></Register>
      }
      ,
      {
        path:"/Mylist",
        element:<MyList></MyList>,
        loader:()=>fetch('http://localhost:5000/booking')
        
      }
      ,
      {
        path:"/bookingDetails/:id",
        element:<BookingDetails></BookingDetails>,
         loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
      }
      ,
      {
        path:"/conform/:id",
        element:<Conform></Conform>,
        loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
