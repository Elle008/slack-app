import React from 'react';
import workspaceImage from '../../assets/workspacecover.png'
import { useNavigate } from "react-router-dom";
import { workspaces } from "../../data/workspaces";
const WorkspaceList = () => {
  const navigate = useNavigate()

  const mapWorkspaceList = 
    workspaces.map( item => 
      <li>
        <div className="ws-info">
          <img src={workspaceImage} />
          <div>
            <h3>{item.name}</h3>
            <p>{`${item.members.length} members`}</p>
          </div>
        </div>
        <button className="btn">
          Enter Workspace
          <span class="material-symbols-outlined">arrow_right</span>
        </button>
      </li>
    )

    const goToCreateWorkspace = () => {
      navigate('/create-workspace')
    }
  
  return (
    <div className="workspace">
      <header>
        <h3>Your Workspaces</h3>
        <button className="trans-btn" onClick={goToCreateWorkspace}>
          Create Workspace
          <span class="material-symbols-outlined">library_add</span>
        </button>
      </header>
      <ul className="ws-list">{mapWorkspaceList}</ul>
      
    </div>
  );
}
 
export default WorkspaceList;