import React from 'react';
import photo from '../../assets/profile.png'

const NewPost = () => {
  return (
    <form action="" className="new-post box flex-row">
      <img src={photo} className='img-xs' />
      <div className="flex-col">
        <textarea placeholder="Tag @channel or @username on your post"></textarea>
        <button type="submit">Post</button>
      </div>
    </form>
  );
}
 
export default NewPost;