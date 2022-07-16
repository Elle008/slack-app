import React from 'react';
import photo from '../assets/profile.png'

const Members = () => {
  return (
    <div className="widget box">
      <div className="widget-header flex-row">
        <h4>Members</h4>
        <p className="flex-row">
          3
          <span class="material-symbols-outlined icon">person</span>
        </p>
      </div>
      <div className="flex-row">
        <img src={photo} className='img-xs'/>
        <img src={photo} className='img-xs'/>
        <img src={photo} className='img-xs'/>
        <img src={photo} className='img-xs'/>
        <img src={photo} className='img-xs'/>
      </div>
    </div>
  );
}
 
export default Members;