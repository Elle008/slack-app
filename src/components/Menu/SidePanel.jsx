import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import ChannelList from "./ChannelList"

const SidePanel = ({ setShowCreateChannel, setShowChatModal, chatWith }) => {
	const [channelList, setChannelList] = useState([])
	const openChannelModal = () => {
		setShowCreateChannel(true)
	}

	const openChatModal = () => {
		setShowChatModal(true)
	}

	return (
		<div className="side-panel flex-col">
			<div className="flex-col">
				<NavLink to={"/app"} className="tab flex-row">
					Dashboard
				</NavLink>
			</div>
			<div className="flex-col">
				<nav className="tab flex-row">
					Channel
					<span className="material-symbols-outlined icon" onClick={openChannelModal}>
						add
					</span>
				</nav>
				<ChannelList channelList={channelList} setChannelList={setChannelList} />
			</div>
			<div className="flex-col">
				<nav className="tab flex-row">
					Direct Message
					<span className="material-symbols-outlined icon" onClick={openChatModal}>
						add
					</span>
				</nav>
				<div className="flex-col sub-items">
					<NavLink to={`/app/message/${chatWith.id}`} className="sub-tab">
						{chatWith.email}
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default SidePanel
