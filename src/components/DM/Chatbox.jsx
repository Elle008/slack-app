import React from "react"
import { formatDate } from "../../helpers/formatDate"

const Chatbox = ({ conversation, user }) => {
	const sortedConvo = conversation.sort((a, b) => {
		return new Date(a.created_at) - new Date(b.created_at)
	})
	return (
		<ul className="flex-col chatbox box">
			{sortedConvo.map((item) => {
				return (
					<li className={`flex-col chat ${item.sender.email === localStorage.getItem('uid') && 'grey'}`}>
						<p className="txt-xs">
							{" "}
							{item.sender.email} • {formatDate(item.created_at)}
						</p>
						<p>{item.body}</p>
					</li>
				)
			})}
		</ul>
	)
}

export default Chatbox
