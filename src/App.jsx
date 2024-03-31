// import {React, lazy} from 'react'
// import './App.css'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const Program = lazy(()=>import('./Pages/Program/Program'));
// const Login = lazy(() => import('./Pages/Login/Login'));
// const Home = lazy(() => import('./Pages/Home/Home'));
// const About = lazy(() => import('./Pages/About/About'));
// const Contact = lazy(()=> import ('./Pages/Contact/Contact'));


// const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path='fastreboot-website/' element={<Home/>}/>
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/program' element={<Program/>}/>
//           <Route path='/contact' element={<Contact/>}/>
          
//         </Routes>
//       </Router>
      
//     </>
    
//   )
// }

// export default App
import React, { lazy } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// const Program = lazy(() => import('./Pages/Program/Program'));
// const Login = lazy(() => import('./Pages/Login/Login'));
// const Home = lazy(() => import('./Pages/Home/Home'));
// const About = lazy(() => import('./Pages/About/About'));
// const Contact = lazy(() => import('./Pages/Contact/Contact'));
// const QNA = lazy(()=>import('./Pages/QNA/QNA'))

import Program from './Pages/Program/Program';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import QNA from './Pages/QNA/QNA';

const App = () => {
  return (
    <>
      <Router> 
        <Routes>
          <Route path="fastreboot-website/" element={<Home />} /> 
          <Route path="/fastreboot-website/login" element={<Login />} /> 
          <Route path="/fastreboot-website/about" element={<About />} /> 
          <Route path="/fastreboot-website/program" element={<Program />} /> 
          <Route path="/fastreboot-website/contact" element={<Contact />} /> 
          <Route path="/fastreboot-website/test" element={<QNA/>}/>
          
        </Routes>
      </Router>
    </>
  );
};

export default App;