import React from "react"
import { formatDate } from "../../helpers/formatDate"

const Chatbox = ({ conversation }) => {
	const sortedConvo = conversation.sort((a, b) => {
		return new Date(a.created_at) - new Date(b.created_at)
	})
	return (
		<ul className="flex-col chatbox box">
			{sortedConvo.map((item) => {
				return (
					<li className="flex-col chat">
						<p className="txt-xs">
							{" "}
							{item.sender.email} • {formatDate(item.created_at)}
						</p>
						<p>{item.body}</p>
					</li>
				)
			})}

			<li className="flex-col chat grey">
				<p className="txt-xs"> Username • 1hr</p>
				<p>This is a chat vxcgdhf dhnfhf hdhfh sgdh</p>
			</li>
		</ul>
	)
}

export default Chatbox
