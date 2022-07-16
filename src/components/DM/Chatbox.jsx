import React from 'react';

import photo from '../../assets/profile.png'
const Chatbox = () => {
  return (
    <ul className="flex-col chatbox box">
      <li className="flex-col chat">
        <p className="txt-xs"> Username • 1hr</p>
        <p>This is a chat</p>               
      </li> 

      <li className="flex-col chat grey">
        <p className="txt-xs"> Username • 1hr</p>
        <p>This is a chat</p>               
      </li> 

      <li className="flex-col chat">
        <p className="txt-xs"> Username • 1hr</p>
        <p>This is a chat hdhfrd nZHd</p>               
      </li> 

      <li className="flex-col chat grey">
        <p className="txt-xs"> Username • 1hr</p>
        <p>This is a chat  vxcgdhf dhnfhf hdhfh sgdh</p>               
      </li>
    </ul>
  );
}
 
export default Chatbox;