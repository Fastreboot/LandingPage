import React, { useEffect, useRef, useState } from 'react';
import '../AssessmentStepper/AssessmentStepper.css';

const AssessmentStepper = ({ stepsConfig = [] }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const stepRef = useRef([]);

    useEffect(() => {
        setMargins({
            marginLeft: stepRef.current[0]?.offsetWidth / 2,
            marginRight: stepRef.current[stepsConfig.length - 1]?.offsetWidth / 2,
        });
    }, [stepRef, stepsConfig]);

    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
    });

    const handleNext = () => {
        setCurrentStep(prevStep => {
            if (prevStep === stepsConfig.length) {
                setIsComplete(true);
                return prevStep;
            } else {
                return prevStep + 1;
            }
        });
    };

    const handlePrevious = () => {
        setCurrentStep(prevStep => {
            if (prevStep === 1) {
                return prevStep;
            } else {
                return prevStep - 1;
            }
        });
    };

    const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
    };

    const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

    if (!stepsConfig.length) {
        return <></>;
    }

    return (
        <>
            <div className='stepper mx-5'>
                {stepsConfig.map((step, index) => (
                    <div
                        key={step.name}
                        ref={el => (stepRef.current[index] = el)}
                        className={`step ${
                            currentStep > index + 1 || isComplete ? 'complete' : ''
                        } ${currentStep === index + 1 ? 'active' : ''}`}
                    >
                        <div className='step-number'>
                            {currentStep > index + 1 || isComplete ? (
                                <span>&#10003;</span>
                            ) : (
                                index + 1
                            )}
                        </div>
                        <div className='step-name'>{step.name}</div>
                    </div>
                ))}

                {/* progress bar */}
                <div
                    className='progress-bar'
                    style={{
                        width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
                        marginLeft: margins.marginLeft,
                        marginRight: margins.marginRight,
                    }}>
                    <div className='progress' style={{ width: `${calculateProgressBarWidth()}%` }}></div>
                </div>
            </div>

            <ActiveComponent />

            {!isComplete && (
                <div className=' flex justify-center gap-12 mt-5'>
                    <button className=' w-20 h-10  rounded-xl hover:bg-gray-300 font-semibold' onClick={handlePrevious} disabled={currentStep === 1}>
                        Previous
                    </button>
                    <button className=' w-20 h-10 bg-green-500 rounded-xl hover:bg-green-600 font-semibold' onClick={handleNext}>{currentStep === stepsConfig.length ? 'Finish' : 'Next'}</button>
                </div>
            )}
        </>
    );
};

export default AssessmentStepper;
