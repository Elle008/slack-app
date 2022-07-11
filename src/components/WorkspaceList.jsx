import React from 'react';
import workspaceImage from '../assets/workspacecover.png'
import { workspaces } from "../data/workspaces";
const WorkspaceList = () => {

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
        <button className="icon-btn">
          Enter Workspace
          <span class="material-symbols-outlined">arrow_right</span>
        </button>
      </li>
    )
  
  return (
    <div className="workspace">
      <header>
        <h2>Your Workspaces</h2>
        <button className="text-icon-btn">
          Create Workspace
          <span class="material-symbols-outlined">library_add</span>
        </button>
      </header>
      <ul className="ws-list">{mapWorkspaceList}</ul>
      
    </div>
  );
}
 
export default WorkspaceList;