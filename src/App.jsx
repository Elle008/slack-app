import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import Slack from "./pages/Slack"
import Channel from "./components/Channel/Channel"
import Message from "./components/DM/Message"
import { allUsers } from "./api/apiRequest"


function App() {
	const [user, setUser] = useState({
		id: "",
		name: "",
		email: "",
		password: "",
		accessToken: "",
		expiry: "",
		client: "",
	})

	const [users, setUsers] = useState([])
	const [channelList, setChannelList] = useState([])

	useEffect(() => {
		allUsers('/api/v1/users', setUsers)
	}, [user.id])

	return (
		<Routes>
			<Route index element={<LoginPage user={user} setUser={setUser} />} />
			<Route path="sign-up" element={<SignUpPage user={user} setUser={setUser} />} />
			<Route
				path="app"
				element={
					<Slack
						user={user}
						users={users}
						channelList={channelList}
						setChannelList={setChannelList}
					/>
				}
			>
				<Route path="channel/:channelId" element={<Channel channelList={channelList} user={user} users={users} />} />
				<Route path="message/:userId" element={<Message user={user} users={users} />} />
			</Route>
		</Routes>
	)
}

export default App
