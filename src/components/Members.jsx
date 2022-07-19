import React from 'react';
import photo from '../assets/profile.png'

const Members = ({members}) => {
  return (
    <div className="widget box">
      <div className="widget-header flex-row">
        <h4>Members</h4>
        <p className="flex-row">
          {members.length}
          <span className="material-symbols-outlined icon">person</span>
        </p>
      </div>
      <div className="flex-row">
        {members.map(item => 
          <div className="flex-col member">
            <img src={photo} className='img-xs'/>
            <p className="txt-xs">{item.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default Members;