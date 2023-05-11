import React, { useContext, useEffect, useState } from 'react';
import { authdataall } from '../../Shared/AuthProvider/AuthProvider';
import Booktable from '../Booktable/Booktable';

const Bookingdata = () => {
 
   const {user}=useContext(authdataall);
   const[data,setData]=useState([]);
   useEffect(()=>{
    fetch(`http://localhost:3200/booking?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setData(data));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
   
   const handleupdate=(id)=>{
    console.log(id);
    fetch(`http://localhost:3200/booking/${id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({status:"confrim"})
    }).then(res=>res.json())
    .then(datas=>{console.log(datas);
    if(datas.modifiedCount>0){
      const filterdata=data.filter(index=>index._id!==id);
      const findata=data.find(index=>index._id==id);
      findata.status="confrim";
      const newarray=[findata,...filterdata];
      setData(newarray);
    }
    
    })
   }
    return (
        <div>
            Booking Service: {data.length}
            <div className="overflow-x-auto w-full my-10">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Remove</th>
        <th>
         Image
        </th>
       <th>Name</th>
        <th>Service</th>
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>

            {
                data.map(index=><Booktable key={index._id}indexdata={index}data={data}setdatas={setData}handleupdate={handleupdate}></Booktable>)
            }
           </tbody>
 
    
    
 </table>
</div>
        </div>
    );
};

export default Bookingdata;
