import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../api/api"
import { headers } from "../../api/headers"
import { sendMessageURL } from "../../api/url"

const ChatInput = ({ user, users }) => {
	const { userId } = useParams()
	const inputRef = useRef()
	const [message, setMessage] = useState({
		receiver_id: Number(userId),
		receiver_class: "User",
		body: "",
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await api.post("/api/v1/messages", message, {
				headers: headers
			})
			inputRef.current.value = ""
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = (e) => {
		setMessage((prev) => ({ ...prev, body: e.target.value }))
	}
	return (
		<form className="chat-input" onSubmit={handleSubmit}>
			<textarea placeholder="Type your message here" ref={inputRef} value={message.body} onChange={handleChange}></textarea>
			<button type="submit" className="icon-btn">
				<span className="material-symbols-outlined">send</span>
			</button>
		</form>
	)
}

export default ChatInput
