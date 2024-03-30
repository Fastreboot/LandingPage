import React from 'react'
import AssessmentStepper from '../../Components/AssessmentStepper/AssessmentStepper'

const AssessmentSteps = [
    {
        name: " question 1",
        Component: () => <div className=' text-center '>first question</div>,
    },
    {
        name: " question 2",
        Component: () => <div className=' text-center '>second question</div>,
    },
    {
        name: " question 3",
        Component: () => <div className=' text-center '>third question</div>,
    },
    {
        name: " question 4",
        Component: () => <div className=' text-center '>fourth question</div>,
    },
    {
        name: " question 5",
        Component: () => <div className=' text-center '>fifth question</div>,
    },
]

const QNA = () => {
  return (
    <div>
        <h1 className=' text-center font-bold text-2xl my-5'>Assessment</h1>
      <AssessmentStepper  stepsConfig={AssessmentSteps}/>
    </div>
  )
}

export default QNA
