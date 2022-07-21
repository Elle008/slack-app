import React, { useEffect } from "react"
import photo from "../assets/profile.png"
import Dashboard from "./Dashboard"

const Members = ({channelMembers}) => {

	return (
		<div className="widget box">
			<div className="widget-header flex-row">
				<h4>Members</h4>
				<p className="flex-row">
					{channelMembers.length}
					<span className="material-symbols-outlined icon">person</span>
				</p>
			</div>
			<div className="flex-row">
				<div className="flex-col member">
					<img src={photo} className="img-xs" />

				</div>
			</div>
		</div>
	)
}

export default Members
