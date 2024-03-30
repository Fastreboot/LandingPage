// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="container px-4 sm:px-8 md:px-14 mx-auto " >
//       <div className="navbar mx-auto flex justify-between items-center bg-white rounded-b-xl h-20 px-4">

//         <div className="brand w-12 flex items-center gap-3 mr-20">
//           <img src="./src/assets/Img/logo.jpg" alt="erro" className='h-100% rounded-2xl'/>
//           <h1 className=" font-bold">Fastreboot.</h1>
//         </div>

//         <div className="lg:hidden">
//           <button
//             className="hamburger-menu-btn"
//             onClick={toggleMenu}
//             aria-label="Toggle Menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className={`nav-links lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
//           <ul className="flex gap-3 font-medium">
//             <li className="hover:text-blue-400 hover:cursor-pointer"><a href="/fastreboot-website/"> Home</a></li>
//             <li className="hover:text-blue-400 hover:cursor-pointer"><a href="/fastreboot-website/about">About Us</a></li>
//             <li className="hover:text-blue-400 hover:cursor-pointer"><a href="/fastreboot-website/program">Our Program</a></li>
//             <li className="hover:text-blue-400 hover:cursor-pointer"><a href="/fastreboot-website/contact">Contact Us</a></li>
//           </ul>
//         </div>
//         <div className={`gap-3 lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
//           <a href="/login">
//           <button className="mr-2 bg-white text-black border-black border-2 px-5 py-2 rounded-xl font-bold hover:bg-stone-200 hover:scale-105 transition-transform duration-300">Login</button>
//           </a>
//           <button className="bg-green-500 px-5 py-2 text-white rounded-xl font-bold hover:bg-green-600 hover:scale-105 transition-transform duration-300">Free Assessment</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/Img/logo.jpg'

const navigation = [
  { name: 'Home', href: '/fastreboot-website/', current: false },
  { name: 'About', href: '/fastreboot-website/about', current: false },
  { name: 'Our Program', href: '/fastreboot-website/program', current: false },
  { name: 'Contact us', href: '/fastreboot-website/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white navbar mx-auto w-4/5 rounded-b-xl h-20 px-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center flex-shrink-0">
                <img
                  className="h-8 w-auto mr-2 rounded-lg"
                  src={logo}
                  alt="Your Company"
                />
                <h1 className="text-black font-bold">Fastreboot.</h1>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 bg-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-black' : 'text-black hover:text-blue-700 ',
                        'rounded-md px-1 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
              </div>
              {/* <div className={"gap-1 lg:flex"}>
                <a href="/login">
                  <button className="mr-2 bg-white h-10  text-black border-black border-2 px-5 rounded-xl font-semibold hover:bg-stone-200 hover:scale-105 transition-transform duration-300">Login</button>
                </a>
                <button className="bg-green-500 h-10 px-5 py-2 text-white rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition-transform duration-300">Free Assessment</button>
              </div> */}
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className={"gap-3 lg:flex"}>
                <a href="/fastreboot-website/login">
                  <button className="mr-2 bg-white h-10  text-black border-black border-2 px-5 rounded-xl font-semibold hover:bg-stone-200 hover:scale-105 transition-transform duration-300">Login</button>
                </a>
                <a href="/fastreboot-website/test">
                <button className="bg-green-500 h-10 px-5 py-2 text-white rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition-transform duration-300">Free Assessment</button>
                </a>
              </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
