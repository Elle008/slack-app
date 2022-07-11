import { useState } from "react";
import Step1 from "./component parts/WSFormStep1";
import Step2 from "./component parts/WSFormStep2";
import Step3 from "./component parts/WSFormStep3";

const WorkspaceForm = () => {
  const [formData, setFormData] = useState(
    {
      workspaceId: '',
      workspaceName: 'hello',
      wsCoverPhoto: [],
      members: []
    }
  )
  const [step, setStep] = useState(0)
  const steps = [
    <Step1 formData={formData} setFormData={setFormData}/>,
    <Step2 formData={formData} setFormData={setFormData}/>,
    <Step3 formData={formData} setFormData={setFormData}/>
  ]

  const goToNext = (e) => {
    e.preventDefault()
    if(step === steps.length - 1) {
      alert('form submitted')
    }
    else {setStep(currState => currState + 1)}
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
          onClick = {goToNext}
          >
           { step === steps.length -1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
}
 
export default WorkspaceForm;