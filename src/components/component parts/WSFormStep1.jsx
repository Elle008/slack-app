const Step1 = ({formData, setFormData}) => {
  const changeWorkspaceName = (e) => {
    console.log('hello');
  }
  return (
    <div>
    <label htmlFor='workspaceName'>Add a name for your new Workspace</label>
    <input id="workspaceName" placeholder="badge" value={formData.workspaceName} onChange={changeWorkspaceName}/>
    </div>
  );
}
 
export default Step1;