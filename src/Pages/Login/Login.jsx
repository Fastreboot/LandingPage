import React from 'react';
import { useForm } from 'react-hook-form';

import meditaion from '../../assets/Img/meditation.jpg'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <>
    <Navbar/>
    <section>
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div className="justify-center mx-auto text-left align-bottom bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
      <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
        <div className="w-full px-6 py-3">
          <div>
            <div className="mt-3 text-left sm:mt-5">
              <div className="inline-flex items-center w-full">
                <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">Sign in</h3>
              </div>
              <div className="mt-4 text-base text-gray-500">
                <p>Sign up and get our newest news.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div>
              <label for="email" className="sr-only">Email</label>
              <input type="text" name="email" id="email" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300  border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email" fdprocessedid="rpnxcp"/>
            </div>
            <div>
              <label for="password" className="sr-only">Password</label>
              <input type="text" name="password" id="password" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300  border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your password" fdprocessedid="1iaai"/>
            </div>
            <div className="flex flex-col mt-4 lg:space-y-2">
              <button type="button" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" fdprocessedid="wm35s9">Sign in</button>
              <a href="#" type="button" className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"> Forgot your Password? </a>
            </div>
          </div>
        </div>
        <div className="order-first hidden w-full md:block">
          <img className="object-cover h-full bg-cover rounded-l-lg" src={meditaion} alt=""/>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
</>
  );
};

export default Login;
