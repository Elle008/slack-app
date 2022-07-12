import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const WorkspaceForm = () => {
  const navigate = useNavigate()
  const [team, setTeam] = useState([])

  const goToWorkspaces = () => {
    navigate('/workspaces')
  }

  const launchSlack = () => {
    navigate('/app')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setTeam(current => [...current, e.target.value])
    }
  }

  const deleteEmail = (item) => {
    setTeam([team.filter(i => i !== item)])
  }

  return (
    <div className="workspace">
      <header>
        <h2>Create New Workspace</h2>
        <button className="text-icon-btn" onClick={goToWorkspaces}>
         Go To Your Workspaces
          <span className="material-symbols-outlined">arrow_left</span>
        </button>
      </header>
      
      <form className="center" onSubmit={launchSlack}>
        <label htmlFor="workspaceName">Add a name for your workspace</label>
        <input id="workspaceName" className='placeholder-text' placeholder="Ex. ABC Design Team"/>
        <label htmlFor="members">Invite your teammates to this workspace</label>
        <input type='email'
        className='placeholder-text'
        onKeyPress={handleKeyPress}
        placeholder="Type an email address, then press Enter"/>
        <div className="chips-container">
          {team.map(item => {
            return <div className="chips flex-row">
              <p>{item}</p>
              <span class="material-symbols-outlined" onClick={() => deleteEmail(item)}>close</span>
            </div>
          })}
        </div>
        <button>
          { team.length > 0 ? 'Invite & Launch Workspace' : 'Launch Workspace'}
        </button>
      </form>
    </div>
  );
}
 
export default WorkspaceForm;