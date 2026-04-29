import WriteReviewHeader from "../components/WriteReviewHeader";
import StepIndicator from "../components/StepIndicator";
import DropDown from "../components/drop-down";

import { useState } from 'react';

const WriteReview = () => {
    const [currentStep, _setCurrentStep] = useState(1);

    let dorms: string[] = ['Middle Earth', 'Mesa Court', 'Palo Verde']

    return (
        <div className='write-review'>
            <div className="page-content">
                <WriteReviewHeader />
                <StepIndicator currentStep={currentStep} />
                <div className="write-review-title">Identify Your Space</div>
                <DropDown title="DORM NAME" choices= {dorms}/>
            </div>
        </div>
    )
}

export default WriteReview;