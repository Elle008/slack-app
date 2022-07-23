import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import api from "../../api/api"
import { headers } from "../../api/headers"

const ChannelList = ({setChannelList, channelList}) => {

	useEffect(() => {
		;(async () => {
			try {
				const response = await api.get('/api/v1/channels', {
					headers: headers
				})
				if (!response.data.errors) {
					setChannelList(response.data.data)
				}			
			} catch (error) {
				return error
			}
		})()
	})
	return (
		<div className="flex-col sub-items">
			{channelList.map((item) => (
				<NavLink to={`/app/channel/${item.id}`} className="sub-tab">
					{item.name}
				</NavLink>
			))}
		</div>
	)
}

export default ChannelList
