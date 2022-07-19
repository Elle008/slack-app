import React, { Profiler } from 'react';
import photo from '../../assets/profile.png'
import { useNavigate } from "react-router-dom";
import { workspaces } from "../../data/objects";

const AccountModal = ({user, currWorkspace, showSettings, setShowSettings}) => {
  const navigate = useNavigate()
  const goToWorkspace = () => {
    navigate('/workspace', { replace: true })
  }

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
        <img src={photo} className='img-xs'/>
        <span className="txt-xs">change image</span>
      </div>
      <p>{user.username}</p>
      <p>{currWorkspace.name}</p>
      <button onClick={goToWorkspace}>Switch Workspace</button>
      <a className="txt-xs" onClick={logout}>Sign out</a>
    </div>
  );
}
 
export default AccountModal;