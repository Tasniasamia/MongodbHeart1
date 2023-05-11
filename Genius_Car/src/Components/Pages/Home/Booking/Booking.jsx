import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authdataall } from '../../Shared/AuthProvider/AuthProvider';

const Booking = () => {
    const[objdata,setObj]=useState({});
    const receivedata=useContext(authdataall);
    const loaddata=useLoaderData();
    const {title,service_id,price,img}=loaddata
    console.log(loaddata);
    const handlefunction=event=>{
        event.preventDefault();
       
        const name=event.target.name.value;
        const date=event.target.date.value;
        const userdata={
            email:receivedata.user.email,
            title,
            service_id,
            price,
            img,
            name:name,
            date:date




        }
        fetch('http://localhost:3200/booking',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userdata)
        }).then(res=>res.json()).then(data=>console.log(data))
        console.log(userdata);
       return setObj(userdata);
    }
    console.log(objdata);
    return (
        <div className='my-20'>
                                    <h2 className='text-xl text-center font-bold'>Book Service:  {loaddata.title}</h2>

      
       

       
         
            <form className="grid md:grid-cols-2 grid-cols-1 gap-6 my-10"onSubmit={handlefunction}>

            
              
              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name"name='name'defaultValue={receivedata.user?.displayName} className="input input-bordered" />
              </div>



              <div className="form-control l w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Name"name='email'defaultValue={receivedata.user?.email} className="input input-bordered" />
              </div>

          










              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" placeholder="date"name="date" className="input input-bordered" />
               
              </div>
              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" placeholder="price"name="price"defaultValue={loaddata.price} className="input input-bordered" />
               
              </div>
             
              <div className="form-control mt-6 col-span-2">
                <button className="btn btn-primary block">Order Confrim</button>
              </div>
              </form>
            
            </div>
       
   
     
    );
};

export default Booking;