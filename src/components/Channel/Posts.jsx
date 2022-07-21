import React, { useEffect, useState } from "react"
import api from "../../api/api"
import photo from "../../assets/profile.png"

const Posts = ({ channelId, user }) => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		;(async () => {
			try {
				const response = await api.get(`/api/v1/messages?receiver_id=${channelId}&receiver_class=Channel`, {
					headers: {
						expiry: user.expiry,
						uid: user.email,
						"access-token": user.accessToken,
						client: user.client,
					},
				})
				setPosts(response.data.data)
			} catch (error) {
				return error
			}
		})()
	}, [channelId])


	return (
		<div className="posts">
			{posts.map((item) => (
				<div className="post flex-col box">
					<div className="flex-row info">
						<img src={user.image} className="img-xs" />
						<div className="flex-col">
							<p>Username</p>
							<p className="txt-xs">{item.created_at}</p>
						</div>
						<span className="material-symbols-outlined icon">bookmark</span>
					</div>
					<div className="flex-row content">
						<p>{item.body}</p>
					</div>
					<div className="flex-row post-data">
						<div className="flex-row">
							<p>1</p>
							<span className="material-symbols-outlined icon">recommend</span>
						</div>
						<p>1 Reply</p>
					</div>
					<div className="flex-row post-btn">
						<button className="trans-btn">
							<span className="material-symbols-outlined">thumb_up</span>
							Like
						</button>
						<button className="trans-btn">
							<span className="material-symbols-outlined">reply</span>
							Reply
						</button>
					</div>
					<div className="replies">
						<div className="flex-row">
							<img src={photo} className="img-xs" />
							<div className="flex-col reply">
								<span className="txt-xs"> Username • 1hr</span>
								<p>This is a comment</p>
							</div>
						</div>
						<div className="flex-row">
							<img src={photo} className="img-xs" />
							<div className="flex-col reply">
								<span className="txt-xs"> Username • 1hr</span>
								<p>This is a comment This is a comment This is a comment This is a comment This is a comment</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Posts
