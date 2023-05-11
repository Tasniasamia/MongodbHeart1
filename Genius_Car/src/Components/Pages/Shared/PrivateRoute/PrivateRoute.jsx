import React, { useContext } from 'react';
import { authdataall } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authdataall);
    if(user){
        return children;
    }
    if(loading){
        <p>loading.............</p>
    }
    
    return  <NavLink to="/Resister_login/Login"replace></NavLink>
        

            
        
    
};

export default PrivateRoute;