import React from 'react';
import { Link } from 'react-router-dom';

const Service_card = (props) => {
    const propsdata=props.indexdata;
    console.log(propsdata);
    return (
        <div className="card  bg-base-100 shadow-xl w-full p-10 rounded-lg">
        <figure><img src={propsdata.img} alt="Shoes"className='h-[200px] rounded-lg' /></figure>
        <div className="card-body">
          <h2 className="card-title">{propsdata.title}</h2>
          <p>Price: {propsdata.price}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary "><Link to={`/booking/${propsdata._id}`}> Book Now</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Service_card;