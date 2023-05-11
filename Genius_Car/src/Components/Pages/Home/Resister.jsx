import React, { useContext, useState } from 'react';
import pik from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { authdataall } from '../Shared/AuthProvider/AuthProvider';

const Resister = () => {
 
    
    const[success,setSuccess]=useState(null);
    const[err,setErr]=useState(null);
    const receivedata=useContext(authdataall);
    console.log(receivedata);
const handlefunction=(event)=>{
    event.preventDefault();
const email=event.target.email.value;
const name=event.target.name.value;
const password=event.target.password.value;
receivedata.resister(email,password)
.then((userCredential) => 
{const user = userCredential.user;
    console.log(user);
    setSuccess("User has Submitted Successfull");
    setErr(" ");
    receivedata.logout();
    receivedata.upadateprofiles(name).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setSuccess(" ");
    setErr(errorMessage);
    // ..
  });
    
}

    return (
        <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row items-center my-20 justify-between">
    <div className="text-center lg:text-left">
      <img src={pik} alt="login.img" className='img-fluid'/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ms-20">
      <form className="card-body"onSubmit={handlefunction}>
        <h2 className='text-center text-3xl font-extrabold'>Sign Up</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name"name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email"name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confrim Password</span>
          </label>
          <input type="text" placeholder="password"name="password" className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <h2 className='text-green-600'>{success}</h2>
        <h2 className='text-red-600'>{err}</h2>

        <h2 className='text-center my-5'style={{color:"gray"}}>Or Sign Up with</h2>
        <div className='text-center'> 
        <button className="btn btn-circle me-2 "style={{background:"#F5F5F8",color:"gray"}}><i className="fa-brands fa-google"></i></button>
        <button className="btn btn-circle me-2 "style={{background:"#F5F5F8",color:"gray"}}><i className="fa-brands fa-facebook-f"></i></button>        
        <button className="btn btn-circle me-2 "style={{background:"#F5F5F8",color:"gray"}}><i className="fa-brands fa-github"></i></button>
        </div>
        <h2 className='text-center my-5'style={{color:"gray"}}>Aready Have an Account?<Link to="/Resister_login/Login"className='text-decoration-none text-blue-500'>Login</Link></h2>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Resister;