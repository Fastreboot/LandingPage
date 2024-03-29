import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container px-4 sm:px-8 md:px-14 mx-auto " >
      <div className="navbar mx-auto flex justify-between items-center bg-white rounded-b-xl h-20 px-4">
          
        <div className="brand w-12 flex items-center gap-3 mr-20">
          <img src="./src/assets/Img/logo.jpg" alt="erro" className='h-100% rounded-2xl'/>
          <h1 className=" font-bold">Fastreboot.</h1>
        </div>
          
        <div className="lg:hidden">
          <button
            className="hamburger-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`nav-links lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex gap-3 font-medium">
            <li className="hover:text-blue-400 hover:cursor-pointer"><a href="/fastreboot-website/"> Home</a></li>
            <li className="hover:text-blue-400 hover:cursor-pointer"><a href="/fastreboot-website/about">About Us</a></li>
            <li className="hover:text-blue-400 hover:cursor-pointer"><a href="/fastreboot-website/program">Our Program</a></li>
            <li className="hover:text-blue-400 hover:cursor-pointer"><a href="/fastreboot-website/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className={`gap-3 lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="/login">
          <button className="mr-2 bg-white text-black border-black border-2 px-5 py-2 rounded-xl font-bold hover:bg-stone-200 hover:scale-105 transition-transform duration-300">Login</button>
          </a>
          <button className="bg-green-500 px-5 py-2 text-white rounded-xl font-bold hover:bg-green-600 hover:scale-105 transition-transform duration-300">Free Assessment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;