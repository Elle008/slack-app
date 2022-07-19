import React, { Profiler } from 'react';
import photo from '../../assets/profile.png'
import { useNavigate } from "react-router-dom";
import { workspaces } from "../../data/objects";

const AccountModal = ({user, showSettings, setShowSettings}) => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  const closeModal = () => {
    setShowSettings(false)
  }
  return (
    <div className="account box flex-col" style={ showSettings ? {display: 'flex'} : {display: 'none'}}>
      <span className="material-symbols-outlined close" onClick={closeModal}>close</span>
      <div className="flex-row">
        <img src={user.image} className='img-xs'/>
        <span className="txt-xs">change image</span>
      </div>
      <p>{user.name}</p>
      <p>{user.id}</p>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}
 
export default AccountModal;