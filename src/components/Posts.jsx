import photo from '../assets/profile.png'
const Posts = () => {
  return (
  <div>
    <div className="flex-row">
      <img src={photo} alt="" />
      <div className="flex-row">
        <p>Ellaine Dela Cruz</p>
        <p>Jan 1 • 8:00am</p>
        <span class="material-symbols-outlined">bookmark</span>
      </div>
    </div>
    <div className='flex-row'>
      <p>This is a sample post</p>
    </div>
    <div className="flex-row">
      <button className="text-icon-btn">
      <span class="material-symbols-outlined">thumb_up</span>
        React
      </button>
      <button className="text-icon-btn">
      <span class="material-symbols-outlined">reply</span>
        Reply
      </button>
    </div>
    

  </div>
  );
}
 
export default Posts;