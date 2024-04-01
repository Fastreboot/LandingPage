import React from 'react';
import CountUp from 'react-countup';

const Impact = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-4'>
      <h2 className='text-gray-500 font-bold text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 mb-4'>Our Impact</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">

        {/* 1 */}

        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
          <div className="text-2xl font-semibold text-black">
            <CountUp start={0} end={15} duration={4} />
            <span className="text-3xl font-bold ml-1 text-orange-500">+</span>
          </div>
          <div className="text-gray-600">Mentors</div>
        </div>

        {/* 2 */}

        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
          <div className="text-2xl font-semibold text-black">
            <CountUp start={300} end={893} duration={4} />
            <span className="text-3xl font-bold ml-1 text-orange-500">+</span>
          </div>
          <div className="text-gray-600">Active Members</div>
        </div>

        {/* 3 */}

        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
          <div className="text-2xl font-semibold text-black">
            <CountUp end={30} duration={6} />
            <span className="text-3xl font-bold ml-1 text-orange-500">+</span>
          </div>
          <div className="text-gray-600">Case Studies</div>
        </div>

        {/* 4 */}


        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
          <div className="text-2xl font-semibold text-black">
            <CountUp end={5} duration={4} />
            <span className="text-3xl font-bold ml-1 text-orange-500">+</span>
          </div>
          <div className="text-gray-600">Programs</div>
        </div>

        
      </div>
    </div>
  );
}

export default Impact;
