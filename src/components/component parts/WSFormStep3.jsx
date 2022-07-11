const Step3 = ({formData, setFormData}) => {
  const addMembers = (e) => {
    setFormData({...formData, members:[e.target.value]})
    log()
  }

  const log = () => {
    console.log(formData.members)
  }

  return (
    <div>
    <label htmlFor='members'>Add members to your workspace</label>
    <input id="members" value={formData.members} onChange={addMembers}/>
    </div>
  );
}
 
export default Step3;