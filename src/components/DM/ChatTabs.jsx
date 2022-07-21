import React, { useEffect } from "react"
import { sort } from "../../helpers/sort"
import { NavLink } from "react-router-dom"

const ChatTabs = ({ prevChats }) => {
  let sortedTabs = prevChats.sort((a, b) => {
		return new Date(a.created_at) - new Date(b.created_at)
	})

  sortedTabs = sortedTabs.filter((item, idx, arr) => {
    return idx === arr.findIndex(i => i.sender.id === item.sender.id)
  })

	return (
		<div className="flex-col sub-items">
			{sortedTabs.map((item) => {
				return (
					<NavLink to={`/app/message/${item.sender.id}`} className="sub-tab">
						{item.sender.email}
					</NavLink>
				)
			})}
		</div>
	)
}

export default ChatTabs
