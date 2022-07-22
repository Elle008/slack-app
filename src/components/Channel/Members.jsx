import React from "react"
import photo from "../../assets/profile.png"

const Members = ({ currChannel, users }) => {

	const getEmail = (memId) => {
		const userData = users.find((item) => {
			return item.id === memId
		})
		return  userData.email
	}

	return (
		<div className="widget box">
			<h4>{currChannel.name}</h4>
			<div className="widget-header flex-row">
				<h4>Members</h4>
				<p className="flex-row">
					{currChannel.members.length}
					<span className="material-symbols-outlined icon">person</span>
				</p>
			</div>
			<div className="flex-row">
				{currChannel.members.map((item) => (
					<div className="flex-col member">
						<img src={photo} className="img-xs" />
						<p className="tooltip">{getEmail(item.user_id)}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Members
