import {React, useState} from 'react'

// images

import evaluationImg from '../../../assets/Img/evaluation.jpg';
import rulesImg from '../../../assets/Img/rules.jpg';
import coachingImg from '../../../assets/Img/coaching.jpg';
import meditationImg from '../../../assets/Img/meditation.jpg';


const milestoneContents = [
{
  id:1,
  image:{evaluationImg},
  heading:"PRIME PROGRESSIVE EVALUATION SESSIONS",
  para:"ഓരോ 20 ദിവസം കൂടുമ്പോഴും നിങ്ങൾക്ക് ഞങ്ങളുടെ Head Coach ഉമായി sitting ഉണ്ടായിരിക്കുന്നതാണ്. നിങ്ങളിൽ ഇത് വരെയുള്ള progression analyzse  ചെയ്യുന്നതിനും മുന്നോട്ടുള്ള യാത്രക്ക് വേണ്ട Personalized curriculum ഉൾപ്പെടെ ഇവർ നൽകുന്നു.നിങ്ങളിൽ Betterment സൃഷ്ടിക്കുവാൻ Fastreboot നൽകുന്ന ഉറപ്പാണ്, സുരക്ഷയാണ് ഈ സെഷൻസ്",
},
{
  id:2,
  image:{rulesImg},
  heading:"The Life Codes",
  para:"പല proven techniques ഇലൂടെയും methods ഇലൂടെയും Build ചെയ്തിട്ടുള്ള ഒരു Checklist (An Easy and impactful Life rules ) നിങ്ങളിൽ follow up ചെയ്യിക്കുന്നു. വളരെ കുറഞ്ഞ സമയം മാത്രേ ഇത് കമ്പ്ലീറ്റ് ആക്കാൻ എടുക്കുന്നുള്ളൂ. പക്ഷേ, ഇതിൻ്റെ continuous result എന്നുള്ളത് നിങ്ങളെ high levels ഇൽ എത്തിക്കുന്നു",
},
{
  id:3,
  image:{coachingImg},
  heading:"Live Coaching",
  para:"എല്ലാ ഞായർ ബുധൻ ദിവസങ്ങളിൽ രാത്രി 8 മണിക്ക് നിങ്ങൾക്ക് ഒരു Live Coaching Session ഉണ്ടായിരിക്കുന്നതാണ് നിങ്ങളുടെ Life rebuild ചെയ്യുന്നതിനായി എല്ലാ വെള്ളി ഞായർ ബുധൻ ദിവസങ്ങളിലും രാത്രി 8 മണിക്ക് ആയിരിക്കും ഈ സെഷൻ conduct ചെയ്യുന്നുണ്ടാവുക. Mind Tuning practitioner ഉം Life Coach & Councellor ഉമായിട്ടുള്ള Anil Kumar PC യുടെ നേതൃത്വത്തിലും Josh Talk Fame ഉം Life Coach ഉം ആയിട്ടുള്ള Nizam Moonniyoor നേതൃത്വത്തിലും ആയിരിക്കും Live sessions conduct ചെയ്യുന്നുണ്ടാവുക ഇതിലൂടെ നിങ്ങൾക്ക് ഒരു കരുത്തുറ്റ ഒരു സപ്പോർട്ട് കിട്ടുകയും അത് നിങ്ങളെ കൂടുതൽ മുന്നോട്ടു നയിക്കുകയും ചെയ്യുന്നു. നിങ്ങളുടെ identity തികച്ചും privacy യിൽ ആയിരിക്കും. നിങ്ങളുടെ ഇഷട്ടാനുസരണം join ചെയ്യാവുന്നതാണ്z",
},
// {
//   id:4,
//   image:{meditationImg},
//   heading:"Live Meditation",
//   para:"എല്ലാ ദിവസവും രാവിലെ 5.30 മണിക്ക് നിങ്ങൾക്ക് ഒരു ലൈവ് മെഡിറ്റേഷൻ ഉണ്ടായിരിക്കുന്നതാണ്. ഇതിലൂടെ നിങ്ങൾക്ക് നല്ലൊരു ക്ലിയർ മൈൻഡ്സെറ്റ് ക്രിയേറ്റ് ചെയ്യാൻ സാധിക്കുന്നു. Meditation Types : 5 ഇലധികം Different Meditations ഞങ്ങൾ നിങ്ങൾക്കായി ദിവസവും നൽകുന്നു",
// },
]

const ParagraphStyles = {

    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
  }

const Milestone = () => {
    const [isopen, setIsopen] = useState(false);
  return (
    <>
        {/* milestone */}

        

        <div className="container mx-auto bg-gray-300 py-8 ">
        <h1 className='text-3xl font-extrabold text-center text-gray-600'>Step a Milestone
        </h1>
        <div className='flex flex-wrap justify-center gap-5 mt-8'>
        {
    milestoneContents.map((content, index) => (
      <div className='py-2 w-52 h-full flex flex-wrap bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' key={index}>
        <div className=''>
          <img src={content.image} alt="" className='rounded-lg'/>
        </div>
        <div className='py-2'>
          <h5 className="mb-2 text-base text-center md:text-sm font-bold tracking-tight text-gray-900 dark:text-white">{content.heading}</h5>
          <p className="px-1 items-start text-base text-center font-normal text-gray-700 dark:text-gray-400" style={isopen ? null : ParagraphStyles}>
            {content.para}
          </p>
        </div>
        <button className='px-2 text-green-300' onClick={() => setIsopen(!isopen)}>{isopen ? "read less" : "read more..."}</button>
      </div>
    ))
  }
        </div>

      
        </div>
    </>
  )
}

export default Milestone
