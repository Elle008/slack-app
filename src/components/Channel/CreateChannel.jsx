import React, { useRef, useState, useEffect } from "react"
import { isEmail } from "../../helpers/emailValidation"
import api from "../../api/api"
import { getData } from "../../helpers/getID"
import { headers } from "../../api/headers"

const CreateChannel = ({ showCreateChannel, setShowCreateChannel, users }) => {
	const inputRef = useRef()
	const [error, setError] = useState([])
	const [members, setMembers] = useState([])
	const [channel, setChannel] = useState({
		name: "",
		user_ids: [],
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (error.length <= 0) {
			try {
				const response = await api.post("/api/v1/channels", channel, {
					headers: headers,
				})
				console.log(response.data.errors)
				if (response.data.errors) {
					setError(response.data.errors)
				} else {
					closeModal()
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	const handleChange = (e) => {
		setChannel((prev) => ({ ...prev, name: e.target.value }))
		setError([])
	}

	const clearError = () => {
		setError([])
	}

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()
			if (isEmail(e.target.value)) {
				const data = getData(users, e.target.value)
				if (data) {
					setChannel((prev) => ({ ...prev, user_ids: [...prev.user_ids, data.id] }))
					setMembers((prev) => [...prev, { id: data.id, email: e.target.value }])
				} else {
					setError((prev) => [...prev, "User doent exist"])
				}
			} else {
				setError((prev) => [...prev, "Invalid Email Address"])
			}
		}
	}

	const deleteMember = (deleted) => {
		const filteredMembers = members.filter((i) => i.id !== deleted)
		const filteredIds = channel.user_ids.filter((i) => i !== deleted)
		setMembers(filteredMembers)
		setChannel((prev) => ({ ...prev, user_ids: filteredIds }))
	}

	const closeModal = () => {
		setShowCreateChannel(false)
	}

	useEffect(() => {
		inputRef.current.value = ""
	}, [channel])

	return (
		<div className="full-modal" style={showCreateChannel ? { display: "flex" } : { display: "none" }}>
			<form onSubmit={handleSubmit}>
				<h3>Create Channel</h3>
				{error && <p className="error">{error}</p>}
				<label>Channel Name</label>
				<input placeholder="Ex. Announcements or Project X" onChange={handleChange} />
				<label className="flex-row">
					Add select teammates to this channel
					<p>(Optional)</p>
				</label>
				<input placeholder="Type email address then press Enter" ref={inputRef} onChange={clearError} onKeyPress={handleKeyPress} />
				<div className="chips-container">
					{members.map((item) => {
						return (
							<div className="chips flex-row">
								<p>{item.email}</p>
								<span className="material-symbols-outlined" onClick={() => deleteMember(item.id)}>
									close
								</span>
							</div>
						)
					})}
				</div>
				<button>Create Channel</button>
				<button className="close" onClick={closeModal}>
					<span className="material-symbols-outlined">cancel</span>
				</button>
			</form>
		</div>
	)
}

export default CreateChannel
