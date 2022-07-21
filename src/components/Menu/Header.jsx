import logo from "../../assets/logo.png"
import photo from "../../assets/profile.png"
import React from "react"

const Header = ({ user, setShowSettings }) => {
	const openModal = () => {
		setShowSettings(true)
	}

	return (
		<header>
			<img src={logo} className="logo" />

			<input type="search" placeholder="Search" />

			<div className="user flex-row" onClick={openModal}>
				{user.name}
				<img src={photo} className="img-s" />
			</div>
		</header>
	)
}

export default Header
