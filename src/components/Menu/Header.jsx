import logo from "../../assets/logo.png"
import photo from "../../assets/profile.png"
import React from "react"
import { useNavigate } from "react-router-dom"

const Header = ({ user, setShowSettings }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/')
	}

	return (
		<header>
			<img src={logo} className="logo" />

			<input type="search" placeholder="Search" />

			<div className="user flex-row">
				<div>
					<p>{localStorage.getItem('uid')}</p>
					<a onClick={handleClick}>Logout</a>
				</div>
				
				<img src={photo} className="img-s" />
			</div>
		</header>
	)
}

export default Header
