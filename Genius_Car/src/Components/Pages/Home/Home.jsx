import React, { useContext } from 'react';
import pik1 from '../../../assets/images/banner/1.jpg'
import pik2 from '../../../assets/images/banner/2.jpg'
import pik3 from '../../../assets/images/banner/3.jpg'
import pik4 from '../../../assets/images/banner/4.jpg'
import pik5 from '../../../assets/images/banner/5.jpg'
import pik6 from '../../../assets/images/banner/6.jpg'
import About from '../Shared/About/About';
import Services from '../Shared/Service/Services';
import { authdataall } from '../Shared/AuthProvider/AuthProvider';



const Home = () => {
  const receivedata=useContext(authdataall);
  console.log(receivedata.value1)
    return (
        <div>
           <div className="carousel w-full my-3">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={pik1} className="w-full" />
    <div className="absolute flex justify-start items-center transform  left-0 top-0 h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full md:ps-20 h-full p-4 md:p-0">
      <div className='text-white md:space-y-7 md:w-1/2 '>
        <h2 className='text-xl  font-bold md:text-6xl smd:font-extrabold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
        <button className="btn btn-active btn-secondary">Discover More</button>
        <button className="btn btn-outline btn-secondary ms-2">Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-0 md:bottom-0 -bottom-5">
      <a href="#slide4" className="btn btn-circle me-2">❮</a> 
      <a href="#slide2" className="btn btn-circle me-2">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={pik2} className="w-full" />
    <div className="absolute flex justify-start items-center transform  left-0 top-0 h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full md:ps-20 h-full p-4 md:p-0">
      <div className='text-white md:space-y-7 md:w-1/2 '>
        <h2 className='text-xl  font-bold md:text-6xl smd:font-extrabold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
        <button className="btn btn-active btn-secondary">Discover More</button>
        <button className="btn btn-outline btn-secondary ms-2">Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-0 md:bottom-0 -bottom-5">
      <a href="#slide1" className="btn btn-circle me-2">❮</a> 
      <a href="#slide3" className="btn btn-circle me-2">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={pik3} className="w-full" />
    <div className="absolute flex justify-start items-center transform  left-0 top-0 h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full md:ps-20 h-full p-4 md:p-0">
      <div className='text-white md:space-y-7 md:w-1/2 '>
        <h2 className='text-xl  font-bold md:text-6xl smd:font-extrabold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
        <button className="btn btn-active btn-secondary">Discover More</button>
        <button className="btn btn-outline btn-secondary ms-2">Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-0 md:bottom-0 -bottom-5">
      <a href="#slide2" className="btn btn-circle me-2">❮</a> 
      <a href="#slide4" className="btn btn-circle me-2">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={pik4} className="w-full" />
    <div className="absolute flex justify-start items-center transform  left-0 top-0 h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full md:ps-20 h-full p-4 md:p-0">
      <div className='text-white md:space-y-7 md:w-1/2 '>
        <h2 className='text-xl  font-bold md:text-6xl smd:font-extrabold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
        <button className="btn btn-active btn-secondary">Discover More</button>
        <button className="btn btn-outline btn-secondary ms-2">Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-0 md:bottom-0 -bottom-5">
      <a href="#slide3" className="btn btn-circle me-2">❮</a> 
      <a href="#slide1" className="btn btn-circle me-2">❯</a>
    </div>
  </div>
</div> 
<About></About>
<Services></Services>
        </div>
    );
};

export default Home;