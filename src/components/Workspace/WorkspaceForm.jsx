import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { isEmail } from "../../helpers/emailValidation"
import { addWorkspaceToLocal } from "../../helpers/saveToLocal"
import { searchUser } from "../../helpers/searchUsers"

const WorkspaceForm = ({ user, setUser, setCurrWorkspace }) => {
	const navigate = useNavigate()
	const inputRef = useRef()
	const [error, setError] = useState("")
	const [workspace, setWorkspace] = useState({
		name: "",
		members: [],
		channels: [],
	})
	const [member, setMember] = useState({
		id: null,
		name: "",
		email: "",
		image: "",
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		if (workspace.name) {
			addWorkspaceToLocal(user.id, workspace)
			setUser((prev) => ({ ...prev, workspaces: [...prev.workspaces, workspace] }))
			setCurrWorkspace((prev) => ({ ...prev, name: workspace.name, members: workspace.members }))
			navigate("/app", { replace: true })
		} else if (!workspace.name) {
			setError("Please add a name for your workspace")
		}
	}

	const handleChange = (e, input) => {
		setError("")

		if (input === "nameInput") {
			setWorkspace((prev) => ({ ...prev, name: e.target.value }))
		}
	}

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()

			if (isEmail(e.target.value)) {
				searchUser(user, e.target.value, setMember, setError)
			} else {
				setError("Invalid email address")
			}
		}
	}

	const deleteEmail = (deleted) => {
		const filteredMembers = workspace.members.filter((item) => item.email !== deleted)
		setWorkspace((prev) => ({ ...prev, members: filteredMembers }))
	}

	const goToWorkspaces = () => {
		navigate("/workspace", { replace: true })
	}

	useEffect(() => {
		if (member.id) {
			setWorkspace((prev) => ({ ...prev, members: [...prev.members, member] }))
		}
		inputRef.current.value = ""
	}, [member.email])

	useEffect(() => {
		console.log(workspace)
	})

	return (
		<div className="workspace">
			<header>
				<h3>Create New Workspace</h3>
				<button className="trans-btn" onClick={goToWorkspaces}>
					Go To Your Workspaces
					<span className="material-symbols-outlined">arrow_left</span>
				</button>
			</header>

			<form className="center" onSubmit={handleSubmit}>
				{error && <p className="error">{error}</p>}
				<label>Add a name for your workspace</label>
				<input
					placeholder="Ex. ABC Design Team"
					value={workspace.name}
					onChange={(e) => handleChange(e, "nameInput")}
				/>
				<label>Invite your teammates to this workspace</label>
				<input
					className="placeholder-text"
					ref={inputRef}
					onChange={(e) => handleChange(e, "membersInput")}
					onKeyPress={handleKeyPress}
					placeholder="Type an email address, then press Enter"
				/>
				<div className="chips-container">
					{workspace.members.map((item) => {
						return (
							<div className="chips flex-row">
								<p>{item.email}</p>
								<span className="material-symbols-outlined" onClick={() => deleteEmail(item.email)}>
									close
								</span>
							</div>
						)
					})}
				</div>
				<button>{workspace.members.length > 0 ? "Invite & Launch Workspace" : "Launch Workspace"}</button>
			</form>
		</div>
	)
}

export default WorkspaceForm
