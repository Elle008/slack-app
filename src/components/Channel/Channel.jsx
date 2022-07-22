import React, { useEffect, useState } from "react"
import Posts from "./Posts"
import NewPost from "./NewPost"
import { useParams } from "react-router-dom"
import { channelDetailsURL } from "../../api/url"
import api from "../../api/api"
import Members from "./Members"
import AddMembers from "./AddMembers"
import { headers } from "../../api/headers"


const Channel = ({ channelList, user, users }) => {
	const { channelId } = useParams()
	const [currChannel, setCurrChannel] = useState({
		id: 0,
		name: "",
		members: [],
	})

	useEffect(() => {
		;(async () => {
			try {
				const response = await api.get(`${channelDetailsURL}/${channelId}`, {
					headers: headers,
				})
				const ch = response.data.data
				setCurrChannel((prev) => ({ ...prev, id: ch.id, name: ch.name, members: ch.channel_members }))
			} catch (error) {
				return error
			}
		})()
	}, [channelId])

	useEffect(() => {
		console.log(currChannel);
	}, [currChannel])

	return (
		<main className="flex-row dashboard">
			<div className="col">
				<NewPost channelId={channelId} user={user} />
				<Posts channelId={channelId} user={user} />
			</div>
			<div className="col">
				
				<Members currChannel={currChannel} users={users} />
				<AddMembers currChannel={currChannel} users={users} setCurrChannel={setCurrChannel} user={user} />
			</div>
		</main>
	)
}

export default Channel
