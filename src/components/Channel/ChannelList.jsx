import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const ChannelList = ({ list }) => {
	return (
		<div className="flex-col sub-items">
      {list.map(item => 
      <NavLink to={`/app/channel/${item.id}`} className="sub-tab">
				{item.name}
			</NavLink>
      )}
		</div>
	)
}

export default ChannelList
