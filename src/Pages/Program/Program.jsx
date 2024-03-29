import React, { lazy } from 'react'
import HundredDays from '../../Components/HundredDays/HundredDays'
import Footer from '../../Components/Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';

const Program = () => {
  return (
    <div>
      <Navbar/>
      <HundredDays/>
      <Footer/>
    </div>
  )
}

export default Program
