import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom'; 
import backgroundImg from '../../assets/Img/FastrebootImg/backgroundImg.jpg'
const Hero = () => {
  return (
    <div className="relative h-screen bg-green-500">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${backgroundImg})`}}>

        {/* <img src={img} alt=""  className=' object-cover'/> */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Discover a Path to</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">Mental Wellness</h1>
          <Link to="/fastreboot-website/test">
          <button className='bg-green-600 h-10 px-2 py-2 text-white rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition-transform duration-300'>Take Free Assessment</button>
          </Link>
        </div>
        <div className="relative">
        <Navbar/>   
        </div>
      </div>
    </div>
  );
};

export default Hero;
