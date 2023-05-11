import React from 'react';

const Booktable = (props) => {
    const propsdata=props.indexdata;
    const deletefunction=(id)=>{
        const proceed=confirm("Are you sure?");
        if(proceed){
        fetch(`http://localhost:3200/booking/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
        if(data.deletedCount>0){
            const filterdata=props.data.filter(index=>index._id!==id);
            props.setdatas(filterdata);
        }
        
        })
    }
        
    }

    return (

   
      <tr>
        <th>
        <button className="btn btn-circle"onClick={()=>deletefunction(propsdata._id)}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={propsdata.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
         {propsdata.name}
          
        </td>
        <td>{propsdata.title}</td>
        <th>
        {propsdata.email}
        </th>
        <td>{propsdata.date}</td>
        <td>{propsdata.price}</td>
      </tr>
     

 
    
    


    );
}

export default Booktable;