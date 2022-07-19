import React, { useEffect } from "react"
import workspaceImage from "../../assets/workspacecover.png"
import { useNavigate } from "react-router-dom"
const WorkspaceList = ({ workspaces, setCurrWorkspace}) => {
	const navigate = useNavigate()

	const goToCreateWorkspace = () => {
		navigate("/workspace/create", { replace: true })
	}

  const getWorkspaceData = (item) => {
    setCurrWorkspace(prev => ({...prev, name: item.name, members: item.members}))
    navigate('/app', { replace: true })
  }

	return (
		<div className="workspace">
			<header>
				<h3>Your Workspaces</h3>
				<button className="trans-btn" onClick={goToCreateWorkspace}>
					Create Workspace
					<span className="material-symbols-outlined">library_add</span>
				</button>
			</header>
			<ul className="ws-list">
				{workspaces.map((item) => (
					<li>
						<div className="ws-info">
							<img src={workspaceImage} />
							<div>
								<h3>{item.name}</h3>
								<p>{`${item.members.length} members`}</p>
							</div>
						</div>
						<button className="btn" onClick={() => getWorkspaceData(item)}>
							Enter Workspace
							<span className="material-symbols-outlined">arrow_right</span>
						</button>
					</li>
				))}
			</ul>
			{workspaces.length === 0 && (
				<div className="flex-col box">
					<h3>You don't have an active workspace. Click below to get started.</h3>
					<button onClick={goToCreateWorkspace}>Create your first workspace</button>
				</div>
			)}
		</div>
	)
}

export default WorkspaceList
