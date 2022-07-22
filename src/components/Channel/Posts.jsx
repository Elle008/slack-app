import React, { useEffect, useState } from "react"
import api from "../../api/api"
import { headers } from "../../api/headers"
import photo from "../../assets/profile.png"
import { formatDate } from "../../helpers/formatDate"

const Posts = ({ channelId, user }) => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		(async() => {
			try {
				const response = await api.get(`/api/v1/messages?receiver_id=${channelId}&receiver_class=Channel`, {
					headers: headers
				})
				setPosts(response.data.data)
			}
			catch (error) {
				console.log(error);
			}
		})()
	})
	return (
		<div className="posts">
			{posts.map((item) => (
				<div className="post flex-col box">
					<div className="flex-row info">
						<img src={photo} className="img-xs" />
						<div className="flex-col">
							<p>{item.sender.email}</p>
							<p className="txt-xs">{formatDate(item.created_at)}</p>
						</div>
						<span className="material-symbols-outlined icon">bookmark</span>
					</div>
					<div className="flex-row content">
						<p>{item.body}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Posts
