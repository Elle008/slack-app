import React from 'react';
import photo from '../../assets/profile.png'

const Posts = () => {
  return (
    <div className="posts">
      <div className="post flex-col box">
        <div className="flex-row info">
          <img src={photo} className='img-xs'/>
          <div className="flex-col">
            <p>Ellaine Dela Cruz</p>
            <p className="txt-xs">Jan 1 • 8:00am</p>
          </div>
          <span class="material-symbols-outlined icon">bookmark</span>
        </div>
        <div className='flex-row content'>
          <p>This is a sample post</p>
        </div>
        <div className="flex-row post-data">
          <div className="flex-row">
            <p>1</p>
            <span class="material-symbols-outlined icon">recommend</span>
          </div>
          <p>1 Reply</p> 
        </div>
        <div className="flex-row post-btn">
          <button className="trans-btn">
          <span class="material-symbols-outlined">thumb_up</span>
            Like
          </button>
          <button className="trans-btn">
          <span class="material-symbols-outlined">reply</span>
            Reply
          </button>
        </div>
        <div className="replies">
          <div className="flex-row">
            <img src={photo} className='img-xs' />
            <div className="flex-col reply">
              <span className="txt-xs"> Username • 1hr</span>
              <p>This is a comment</p> 
            </div>                  
          </div>
          <div className="flex-row">
            <img src={photo} className='img-xs' />
            <div className="flex-col reply">
              <span className="txt-xs"> Username • 1hr</span>
              <p>This is a comment This is a comment This is a comment This is a comment This is a comment</p> 
            </div>                  
          </div>
          
        </div>
      </div>

      <div className="post flex-col box">
        <div className="flex-row info">
          <img src={photo} className='img-xs'/>
          <div className="flex-col">
            <p>Ellaine Dela Cruz</p>
            <p className="txt-xs">Jan 1 • 8:00am</p>
          </div>
          <span class="material-symbols-outlined icon">bookmark</span>
        </div>
        <div className='flex-row content'>
          <p>This is a sample post This is a sample post This is a sample post This is a sample post This is a sample post This is a sample post</p>
        </div>
        <div className="flex-row post-data">
          <div className="flex-row">
            <p>1</p>
            <span class="material-symbols-outlined icon">recommend</span>
          </div>
          <p>1 Reply</p> 
        </div>
        <div className="flex-row post-btn">
          <button className="trans-btn">
          <span class="material-symbols-outlined">thumb_up</span>
            Like
          </button>
          <button className="trans-btn">
          <span class="material-symbols-outlined">reply</span>
            Reply
          </button>
        </div>
        <div className="replies">
          <div className="flex-row">
            <img src={photo} className='img-xs' />
            <div className="flex-col reply">
              <span className="txt-xs"> Username • 1hr</span>
              <p>This is a comment</p> 
            </div>                  
          </div>
          <div className="flex-row">
            <img src={photo} className='img-xs' />
            <div className="flex-col reply">
              <span className="txt-xs"> Username • 1hr</span>
              <p>This is a comment This is a comment This is a comment This is a comment This is a comment</p> 
            </div>                  
          </div>
          
        </div>
      </div>
    </div>
  );
}
 
export default Posts;