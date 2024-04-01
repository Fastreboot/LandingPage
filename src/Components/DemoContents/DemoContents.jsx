import React, { useState } from 'react';

const DemoContents = () => {
  const [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/E94OXFZWLLs');

  const handleRadioChange = (e) => {
    const selectedValue = e.target.value;
    let newSrc = '';

    
    if (selectedValue === 'stress') {
      newSrc = 'https://www.youtube.com/embed/B8UURf-1msU';
    } 
    else if (selectedValue === 'anxiety') {
      newSrc = 'https://www.youtube.com/embed/2DPgmXbbvPU';
    } else if (selectedValue === 'personality') {
      newSrc = 'https://www.youtube.com/embed/TM758bcwaF8';
    } else {
      
      newSrc = 'https://www.youtube.com/embed/6Bsl68rOlyo';
    }

    
    setVideoSrc(newSrc);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 md:p-8  bg-white w-full">
      {/* <h4 className='text-gray-500  font-bold text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl  text-center'>Demo Videos</h4> */}
      <h4 className='text-gray-500  font-bold text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl  text-center'>Why Us?</h4>
      {/* <h3 className='font-bold text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 text-center '>Watch our videos</h3> */}
      {/* <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" value="stress" onChange={handleRadioChange} />
          <span className="name">Stress</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" value="depression" onChange={handleRadioChange} defaultChecked />
          <span className="name">Depression</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" value="anxiety" onChange={handleRadioChange} />
          <span className="name">Anxiety</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" value="personality" onChange={handleRadioChange} />
          <span className="name">Personality</span>
        </label>
      </div> */}

      <div className="w-full md:w-3/4 bg-white rounded-xl px-4">
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe className="absolute top-0 left-0 w-full h-full rounded-xl" src={videoSrc} title="Embedded Video"></iframe>
        </div>
      </div>
    </div>
  );
};

export default DemoContents;
