import './StepIndicator.css'

type StepIndicatorProps = {
    currentStep: number;
} 

const steps = ['Selection', 'Ratings', 'Review']

const StepIndicator = ({currentStep}: StepIndicatorProps) => {
    return (
        <div className="step-indicator">
            {steps.map((label, i) =>{
                const stepNum = i + 1
                const isActive = stepNum === currentStep
                return (
                    <>
                        <div className="step">
                            <div className={`step-circle ${isActive ? 'active' : ''}`}>{stepNum}</div>
                            <span className={`step-label ${isActive ? 'active' : ''}`}>{label}</span>
                        </div>
                        {i < steps.length - 1 && <div className="step-line"/>}
                    </>
                )
            })}
        </div>
    )
}

export default StepIndicator;
