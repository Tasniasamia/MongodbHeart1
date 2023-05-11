import React, { useContext } from 'react';
import pik from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { authdataall } from './AuthProvider/AuthProvider';
const Header = () => {
  const receivedata=useContext(authdataall);
 
  const navitem=(
    <>
    <li><Link to='/'>Home</Link> </li>
       
    <li><Link to='/'>About</Link> </li>
    <li><Link to='/'>Services</Link> </li>
    <li><Link to='/'>Blog</Link> </li>
  {
    receivedata.user? 
    <>
    <li><Link to="/bookdata">My Booking</Link></li>
  <button className='btn btn-primary ' onClick={receivedata.logout}>Logout</button> </>: <li><Link to='/Resister_login/Login'>Login</Link> </li>
  }
   
    </>
  );
    return (
        <div className="navbar bg-base-100 my-4 h-28">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navitem}
      </ul>
    </div>
<Link to="/"className='text-decoration-none btn btn-ghost normal-case text-xl'><img src={pik} alt="logo" /></Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navitem}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
</div>
    );
};

export default Header;