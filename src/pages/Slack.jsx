import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import SidePanel from "../components/Menu/SidePanel"
import Header from "../components/Menu/Header"
import CreateChannel from "../components/Channel/CreateChannel"
import api from "../api/api"
import { channelURL } from "../api/url"
import NewChat from "../components/DM/NewChat"
import { headers } from "../api/headers"

const Slack = ({ user, users, channelList, setChannelList }) => {
	const [showCreateChannel, setShowCreateChannel] = useState(false)
	const [showChatModal, setShowChatModal] = useState(false)
	const [chatWith, setChatWith] = useState({})


	useEffect(() => {
		;(async () => {
			try {
				const response = await api.get(channelURL, {
					headers: headers
				})
				setChannelList(response.data.data)
			} catch (error) {
				return error
			}
		})()
	}, [])

	return (
		<div>
			<Header user={user} />
			<section className="flex-row">
				<SidePanel
					setShowCreateChannel={setShowCreateChannel}
					setShowChatModal={setShowChatModal}
					user={user}
					channelList={channelList}
					chatWith={chatWith}
				/>
				<Outlet />
			</section>
			<CreateChannel
				showCreateChannel={showCreateChannel}
				setShowCreateChannel={setShowCreateChannel}
				user={user}
				users={users}
			/>
			<NewChat
				user={user}
				users={users}
				setShowChatModal={setShowChatModal}
				showChatModal={showChatModal}
				setChatWith={setChatWith}
				chatWith={chatWith}
			/>
		</div>
	)
}

export default Slack
