import React from 'react'
import ReactDOM from 'react-dom/client'


import "./index.css";
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import AuthProvider from './Components/Pages/Shared/AuthProvider/AuthProvider';



ReactDOM.createRoot(document.getElementById("root")).render(
 <div className='max-w-6xl mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>

);