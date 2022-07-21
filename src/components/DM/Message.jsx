import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../api/api"
import Chatbox from "./Chatbox"
import ChatInput from "./ChatInput"

const Message = ({ user, users}) => {
	const { userId } = useParams()
	const [conversation, setConversation] = useState([])

	useEffect(() => {
		setConversation([])
	}, [userId])

	useEffect(() => {
		;(async () => {
			try {
				const response = await api.get(`/api/v1/messages?receiver_id=${userId}&receiver_class=User`, {
					headers: {
						expiry: user.expiry,
						uid: user.email,
						"access-token": user.accessToken,
						client: user.client,
					},
				})
				const messageData = response.data.data
				if (messageData.length > 0) {
					setConversation(messageData)
				}
			} catch (error) {
				console.log(error)
			}
		})()
	}, [userId])

	return (
		<main className="message">
			<Chatbox user={user} users={users} conversation={conversation} />
			<ChatInput user={user} users={users} />
		</main>
	)
}

export default Message
