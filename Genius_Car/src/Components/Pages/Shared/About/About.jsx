import React from 'react';
import pik1 from '../../../../assets/images/about_us/person.jpg';
import pik2 from '../../../../assets/images/about_us/parts.jpg';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 py-4 ">
  <div className="hero-content flex-col md:flex-row">
    <div className='w-full md:w-1/2 relative'>
    <div><img src={pik1} className="max-w-sm rounded-lg shadow-2xl block w-full h-full" /><br/></div>
    <div><img src={pik2} className="max-w-sm rounded-lg shadow-2xl absolute w-1/2 h-full right-1 top-1/4 
border-8 border-white"/></div></div>
   <div className='md:w-1/2 ps-2'>
    <Link to="/"className='text-decoration-none text-orange-600'>About Us</Link>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p className="py-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <button className="btn btn-primary">Get More Info</button></div>
    </div>
  </div>

    );
};

export default About;