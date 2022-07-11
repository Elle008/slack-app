import { useState } from "react";
import Step1 from "./component parts/WSFormStep1";
import Step2 from "./component parts/WSFormStep2";
import Step3 from "./component parts/WSFormStep3";

const WorkspaceForm = () => {
  
  const [step, setStep] = useState(0)
  const steps = [<Step1/>, <Step2/>, <Step3/>]

  const goToNext = (e) => {
    e.preventDefault()
    setStep(currState => currState + 1)
  }

  const goToPrev = (e) => {
    e.preventDefault()
    setStep(currState => currState - 1)
  }

  

  return (
    <div className="workspace">
      <header>
        <h2>Create New Workspace</h2>
        <button className="text-icon-btn">
          Back
          <span className="material-symbols-outlined">arrow_left</span>
        </button>
      </header>
      <div className="progress-bar">
        <div></div>
        <div style={{width: step === 0 ? '33%' : step === 1 ? '66%' : '100%'}}>
          <span>{step === 0 ? '33%' : step === 1 ? '66%' : '100%'}</span>
        </div>
      </div>
      <form>
        {steps[step]}
        <div className="two-btn-div">
          <button disabled = {step === 0}
          onClick = {goToPrev}
          >
            Prev
          </button>
          <button
          disabled = {step === 2}
          onClick = {goToNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
 
export default WorkspaceForm;