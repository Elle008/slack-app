import React, { useRef, useState, useEffect } from "react"
import { isEmail } from "../helpers/emailValidation"
import api from "../api/api"
import { createChannelURL } from "../api/url"
import { getData } from "../helpers/getID"

const CreateChannel = ({ showCreateChannel, setShowCreateChannel, user, users }) => {
	const inputRef = useRef()
	const [channel, setChannel] = useState({
		name: "",
		user_ids: [],
	})

	const [members, setMembers] = useState([])
	const [error, setError] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await api.post(createChannelURL, channel, {
				headers: {
					expiry: user.expiry,
					uid: user.email,
					"access-token": user.accessToken,
					client: user.client,
				},
			})
      console.log(response);
			closeModal()
		} catch (error) {
      console.log(error);
			setError(error.response.data.errors)
		}
	}

	const handleChange = (e, input) => {
		setChannel((prev) => ({ ...prev, name: e.target.value }))
		setError("")
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
					setError("User doesnt exist")
				}
			} else {
				setError("Invalid email address")
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
    console.log('members', members);
    console.log('channel', channel);
	}, [channel])

	return (
		<div className="full-modal" style={showCreateChannel ? { display: "flex" } : { display: "none" }}>
			<form onSubmit={handleSubmit}>
				<h3>Create Channel</h3>
				{error && <p className="error">{error}</p>}
				<label>Channel Name</label>
				<input placeholder="Ex. Announcements or Project X" 
          onChange={handleChange} 
        />
				<label className="flex-row">
					Add select teammates to this channel
					<p>(Optional)</p>
				</label>
				<input placeholder="Type email address then press Enter"
          ref={inputRef} 
          onKeyPress={handleKeyPress} 
        />
				<div className="chips-container">
					{members.map((item) => {
						return (
							<div className="chips flex-row">
								<p>{item.email}</p>
								<span className="material-symbols-outlined" 
                  onClick={() => deleteMember(item.id)}>
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
