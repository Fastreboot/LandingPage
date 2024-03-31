import React, { useState } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { Typewriter } from 'react-simple-typewriter'
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';


// react icons
import { GiBrain } from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";


import Milestone from './Milestone/Milestone';
import Quotes from './Quotes/Quotes';
import PersonalMentor from './PersonalMentor/PersonalMentor';





const HundredDays = () => {

  const routeMap=[
  {
    id:1,
    name:"DAILY LIVE MEDITATION",
  },
  {
    id:2,
    name:"LIVE COACHING",
  },
  {
    id:3,
    name:"PERSONALITY TEST",
  },
  {
    id:4,
    name:"SATISFACTION TEST",
  },
  {
    id:5,
    name:"ENNIAGRAM TEST",
  },
  {
    id:6,
    name:"JOURNALING",
  },
  {
    id:7,
    name:"PROGRESSION CHECK LIST",
  },
  {
    id:8,
    name:"BUDGET PLANNER",
  },
  {
    id:9,
    name:"MOOD TRACKER",
  },
  {
    id:10,
    name:"TODO LIST",
  },
  {
    id:11,
    name:"STUDY GRAPH",
  },
  {
    id:12,
    name:"VISION PLANNER",
  },
  {
    id:13,
    name:"FIRE MOTIVATION VIDEOS",
  },
  {
    id:14,
    name:"SUCCESS STORIES",
  },
  {
    id:15,
    name:"23 AUDIO BOOKS",
  },
]

  return (
    
    <div>

      <div className='container mx-auto pt-8 py-0' style={{ WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>

        {/* type writing effect heading */}

        <h1 className=' text-center font-extrabold text-3xl text-gray-800 mb-4'>
          Hundred Day's of {' '}
        </h1>
        <span className='flex justify-center text-gray-600 font-extrabold text-4xl' >

          <Typewriter
            words={['Personal Mentoring', 'Mind Mastery', 'Self Mastery', 'Life Mastery']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={90}
            delaySpeed={1000}

          />
        </span>

        <div className=" flex flex-col justify-center  gap-5">
          <div className='px-14' >
            <h1 className=' text-xl sm:text-2xl md:text-3xl font-extrabold pt-5 text-center text-gray-900 '>UNLOCKING YOUR GREATNESS <br /> THROUGH SELF MASTERY!</h1>
            <p className=' font-semibold pt-5 text-left '>നൂതനമായ വിദ്യകളിലൂടെയും തന്ത്രങ്ങളിലൂടെയും പരിശീലനങ്ങളിലൂടെയും നിങ്ങളിൽ LIFE-MASTERY SKILLS
              വളർത്തിയെടുക്കുന്നു. ഇതിലൂടെ നിങ്ങളുടെ പ്രശ്നങ്ങൾ ലഘൂകരിക്കപ്പെടുകയും നിങ്ങളുടെ
              ജീവിതത്തിൽ വളർച്ച സൃഷ്ടിക്കപ്പെടുകയും ചെയ്യുന്നു...
            </p>
          </div>

          {/* mastery icons */}

          <div className="flex flex-wrap w-full justify-center gap-8 mt-5 px-4">
            <div className="flex flex-col items-center gap-3">
              <div className=" flex items-center justify-center w-12 h-12 -start-6 bg-green-200 rounded-full ring-4 ring-white dark:ring-red-500 dark:bg-red-400 ">
                <GiBrain className='w-8 h-8' />
              </div>
              <h1 className=' font-bold'>Mind Mastery</h1>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 -start-6  bg-gray-100 rounded-full  ring-4 ring-white dark:ring-blue-600 dark:bg-blue-500">
                <MdSelfImprovement className='w-8 h-8' />
              </div>
              <h3 className=' font-bold'>Self Mastery</h3>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 -start-6 bg-gray-100 rounded-full  ring-4 ring-white dark:ring-green-700 dark:bg-green-600">
                <FaHandHoldingHeart className='w-8 h-8' />
              </div>
              <h3 className=' font-bold'>Life Mastery</h3>
            </div>
          </div>

          {/* vertical styled mastery */}

          {/* <div className=' m-8 '>
            <ol className="  ml-24 relative text-gray-500 border-s pl-6 border-gray-200 dark:border-gray-700 dark:text-black ">

              <li className="mb-20 ms-6 items-center  flex">
                <span className="absolute flex items-center justify-center w-12 h-12 -start-6 bg-green-200 rounded-full ring-4 ring-white dark:ring-red-500 dark:bg-red-400 ">
                  <GiBrain className='w-8 h-8' />
                </span>
                <h3 className="font-medium leading-tight">Mind Mastery</h3>
              </li>

              <li className="mb-20 ms-6 flex items-center">
                <span className="absolute flex items-center justify-center w-12 h-12 -start-6  bg-gray-100 rounded-full  ring-4 ring-white dark:ring-blue-600 dark:bg-blue-500">
                  <MdSelfImprovement className='w-8 h-8' />
                </span>
                <h3 className="font-medium leading-tight">Self Mastery</h3>
              </li>

              <li className="mb-10 ms-6 flex items-center">
                <span className="absolute flex items-center justify-center w-12 h-12 -start-6 bg-gray-100 rounded-full  ring-4 ring-white dark:ring-green-700 dark:bg-green-600">
                  <FaHandHoldingHeart className='w-8 h-8' />
                </span>
                <h3 className="font-medium leading-tight">Life Mastery</h3>
              </li>
            </ol>
          </div> */}

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="auto" height="200px" preserveAspectRatio="none" viewBox="0 0 1440 560">
            <g mask="url(&quot;#SvgjsMask1065&quot;)" fill="none">
              <path d="M 0,0 C 72,55 216,255.8 360,275 C 504,294.2 576,108 720,96 C 864,84 936,219.4 1080,215 C 1224,210.6 1368,102.2 1440,74L1440 560L0 560z" fill="#184a7e"></path>
              <path d="M 0,466 C 72,450.4 216,395 360,388 C 504,381 576,446.4 720,431 C 864,415.6 936,299.4 1080,311 C 1224,322.6 1368,453.4 1440,489L1440 560L0 560z" fill="#2264ab"></path>
            </g>
            <defs>
              <mask id="SvgjsMask1065">
                <rect width="1440" height="560" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>

        </div>

      </div>
      <PersonalMentor/>
      <Quotes/>
      <Milestone/>
      
      <section className=' container mx-auto w-full py-5'>

          <div>
            <h1 className='text-gray-500  font-bold text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 text-center'>Carriculum Route Map</h1>
            <div className='flex flex-wrap justify-center gap-2 py-5'>
              {
                routeMap.map((routeData, index)=>(
                  <div className=' bg-neutral-200 w-28 px-20 h-14 flex justify-center items-center rounded-xl'>
                  <h2 className=' font-semibold text-sm text-center'>{routeData.name}</h2>
              </div>
                ))
              }
              
            </div>
          </div>
      </section>
      
      
      </div>

  )
}

export default HundredDays
