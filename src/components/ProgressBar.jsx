const ProgressBar = ({step}) => {
  return (
    <div className="progress-bar">
      <div></div>
      <div style={{width: step === 0 ? '25%' : step === 1 ? '50%' : step === 2 ? '75%' : '100%'}}>
        <span>{step === 0 ? '25%' : step === 1 ? '50%' : step === 2 ? '75%' : '100%'}</span>
      </div>
    </div>
  );
}
 
export default ProgressBar;