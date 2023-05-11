import React from 'react';
import Header2 from '../Pages/Shared/Header2';
import { Outlet } from 'react-router-dom';

const Login_Resister_Layout = () => {
    return (
        <div>
          <Header2></Header2>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Login_Resister_Layout;