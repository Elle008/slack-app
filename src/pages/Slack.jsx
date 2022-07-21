import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import SidePanel from "../components/Menu/SidePanel"
import Header from "../components/Menu/Header"
import CreateChannel from "../components/CreateChannel"
import AccountSettings from "../components/Menu/Account"
import api from "../api/api"
import { channelURL } from "../api/url"
import NewChat from "../components/DM/NewChat"

const Slack = ({ user, users, channelList, setChannelList, prevChats }) => {
	const [showCreateChannel, setShowCreateChannel] = useState(false)
	const [showChatModal, setShowChatModal] = useState(false)
	const [showSettings, setShowSettings] = useState(false)
	const [chatWith, setChatWith] = useState({})


	useEffect(() => {
		;(async () => {
			try {
				const response = await api.get(channelURL, {
					headers: {
						expiry: user.expiry,
						uid: user.email,
						"access-token": user.accessToken,
						client: user.client,
					},
				})
				setChannelList(response.data.data)
			} catch (error) {
				return error
			}
		})()
	}, [])

	return (
		<div>
			<Header user={user} setShowSettings={setShowSettings} />
			<section className="flex-row">
				<SidePanel
					setShowCreateChannel={setShowCreateChannel}
					setShowChatModal={setShowChatModal}
					user={user}
					channelList={channelList}
					chatWith={chatWith}
					prevChats={prevChats}
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
			<AccountSettings user={user} showSettings={showSettings} setShowSettings={setShowSettings} />
		</div>
	)
}

export default Slack
