import React, { useEffect, useState } from "react"
import Posts from "./Posts"
import NewPost from "./NewPost"
import { useParams } from "react-router-dom"
import { channelDetailsURL } from "../../api/url"
import api from "../../api/api"
import Members from "../Members"

const Channel = ({channelList, user, users}) => {
	const { channelId } = useParams()
	const [currChannel, setCurrChannel] = useState({
    id: 0,
    name: '',
    members: []
  })

  useEffect(() => {
		(async () => {
			try {
				const response = await api.get( `${channelDetailsURL}/${channelId}` , {
					headers: {
						expiry: user.expiry,
						uid: user.email,
						"access-token": user.accessToken,
						client: user.client,
					},
				})
        const ch = response.data.data;
        setCurrChannel(prev => ({...prev, id: ch.id, name: ch.name, members: ch.channel_members}))
			} catch (error) {
				return error
			}
		})()
	}, [channelId])

	return (
		<main className="flex-row dashboard">
			<div className="col">
        <NewPost channelId={channelId} user={user} />
        <Posts channelId={channelId} user={user}/>
      </div>
      <div className="col">
        <p>{currChannel.name}</p>
        <Members channelMembers={currChannel.members} users={users}/>
      </div>
		</main>
	)
}

export default Channel
