import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isEmail } from "../../helpers/emailValidation";

const WorkspaceForm = () => {
  const navigate = useNavigate()
  const inputRef = useRef()
  const [error, setError] = useState({
    nameInput: '',
    emailInput: ''
  })
  const [workspace, setWorkspace] = useState({
    name: '',
    members: []
  })

  const handleLaunch = (e) => {
    e.preventDefault()
    if (workspace.name) {
      navigate('/app')
    }
    else if (!workspace.name) {
      setError(prev => ({...prev, nameInput: 'Please add a name for your workspace'}))
    }
  }

  const handleChange = (e, input) => {
    setError(prev => ({...prev, [input]: ''}))

    if (input === 'nameInput') {
      setWorkspace(prev => ({...prev, name: e.target.value}))
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()

      if (isEmail(e.target.value)) {
        setWorkspace(prev => ({...prev, members: [...prev.members, e.target.value]}))
      }
      else {
        setError(prev => ({...prev, emailInput: 'Invalid email address'}))
      }      
    }
  }

  const deleteEmail = (deleted) => {
    const filteredMembers = workspace.members.filter(i => i !== deleted)
    setWorkspace(prev => ({...prev, members: filteredMembers}))
  }

  const goToWorkspaces = () => {
    navigate('/workspaces')
  }

  useEffect(() => {
    inputRef.current.value = ''
  }, [workspace])
  
  return (
    <div className="workspace">
      <header>
        <h3>Create New Workspace</h3>
        <button className="trans-btn" onClick={goToWorkspaces}>
          Go To Your Workspaces
          <span className="material-symbols-outlined">arrow_left</span>
        </button>
      </header>
      
      <form className="center" onSubmit={handleLaunch}>
        <label>Add a name for your workspace</label>
        {error.nameInput && <p className="error">{error.nameInput}</p>}
        <input 
          placeholder="Ex. ABC Design Team"
          value={workspace.name}
          onChange={e => {handleChange(e, 'nameInput')}}/>
        <label>Invite your teammates to this workspace</label>
        {error.emailInput && <p className="error">{error.emailInput}</p>}
        <input
        className='placeholder-text'
        ref={inputRef}
        onChange={e => {handleChange(e, 'emailInput')}}
        onKeyPress={handleKeyPress}
        placeholder="Type an email address, then press Enter"/>
        <div className="chips-container">
          {workspace.members.map(item => {
            return <div className="chips flex-row">
              <p>{item}</p>
              <span className="material-symbols-outlined" onClick={() => deleteEmail(item)}>close</span>
            </div>
          })}
        </div>
        <button>
          { workspace.members.length > 0 ? 'Invite & Launch Workspace' : 'Launch Workspace'}
        </button>
      </form>
    </div>
  );
}
 
export default WorkspaceForm;