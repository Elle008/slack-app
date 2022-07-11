const Step2 = ({formData, setFormData}) => {
  
  return (
    <div>
    <label htmlFor='cover-photo'>Upload a cover photo for your Workspace</label>
    <input type="file" id="img" name="img" accept="image/*"/>
    </div>
  );
}
 
export default Step2;