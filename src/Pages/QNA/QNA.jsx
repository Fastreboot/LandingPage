import React from 'react'
import AssessmentStepper from '../../Components/AssessmentStepper/AssessmentStepper'
import Navbar from '../../Components/Navbar/Navbar'

const AssessmentSteps = [
    {
        name: " question 1",
        Component: () => <div className=' text-center '><h1>first question</h1>
        <div className='options flex flex-col justify-center mt-5 items-center gap-8'>
                            <label>
                                <input type="checkbox" name='questions' />
                                
                                Option A
                            </label>
                            <label>
                            <input type="checkbox" name='questions'/>
                                Option B
                            </label>
                            <label>
                            <input type="checkbox" name='questions' />
                                Option C
                            </label>
                        </div>
        </div>,
    },
    {
        name: " question 2",
        Component: () => <div className=' text-center '><h1>Second question</h1>
        <div className='options flex flex-col justify-center mt-5  items-center gap-8'>
                            <label>
                                <input type="checkbox" name='questions' />
                                
                                Option A
                            </label>
                            <label>
                            <input type="checkbox" name='questions'/>
                                Option B
                            </label>
                            <label>
                            <input type="checkbox" name='questions' />
                                Option C
                            </label>
                        </div>
        </div>,
    },
    {
        name: " question 3",
        Component: () => <div className=' text-center '><h1>third question</h1>
        <div className='options flex flex-col justify-center mt-5  items-center gap-8'>
                            <label>
                                <input type="checkbox" name='questions' />
                                
                                Option A
                            </label>
                            <label>
                            <input type="checkbox" name='questions'/>
                                Option B
                            </label>
                            <label>
                            <input type="checkbox" name='questions' />
                                Option C
                            </label>
                        </div>
        </div>,
    },
    {
        name: " question 4",
        Component: () => <div className=' text-center '><h1>fourth question</h1>
        <div className='options flex flex-col justify-center mt-5 items-center gap-8'>
                            <label>
                                <input type="checkbox" name='questions' />
                                
                                Option A
                            </label>
                            <label>
                            <input type="checkbox" name='questions'/>
                                Option B
                            </label>
                            <label>
                            <input type="checkbox" name='questions' />
                                Option C
                            </label>
                        </div>
        </div>,
    },
    {
        name: " question 5",
        Component: () => <div className=' text-center '><h1>fifth question</h1>
        <div className='options flex flex-col justify-center mt-5 items-center gap-8'>
                            <label>
                                <input type='checkbox' name='questions' />
                                
                                Option A
                            </label>
                            <label>
                            <input type="checkbox" name='questions'/>
                                Option B
                            </label>
                            <label>
                            <input type="checkbox" name='questions' />
                                Option C
                            </label>
                        </div>
        </div>,
    },
]

const QNA = () => {
  return (
    <div>
        <Navbar/>
        <h1 className=' text-center font-bold text-2xl my-5'>Assessment</h1>
      <AssessmentStepper  stepsConfig={AssessmentSteps}/>
    </div>
  )
}

export default QNA
