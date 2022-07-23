import React, { useEffect, useRef, useState } from "react"
import api from "../../api/api"
import { headers } from "../../api/headers"

const AddMembers = ({ currChannel, users }) => {
	const inputRef = useRef()
	const [searchList, setSearchList] = useState([])
	const [searchKey, setSearchKey] = useState(" ")
	const handleChange = (e) => {
		setSearchKey(e.target.value.toLowerCase())
	}
	const handleClick = async (memId) => {
		const data = {
			id: currChannel.id,
			member_id: memId,
		}
		try {
			const response = await api.post("/api/v1/channel/add_member", data, {
				headers: headers,
			})
		} catch (error) {
			return error
		}
	}

	useEffect(() => {
		const filteredUsers = users.filter((item) => {
			return item.email.toLowerCase().includes(searchKey)
		})
		setSearchList(filteredUsers)
	}, [searchKey])

	useEffect(() => {
		if (!inputRef.current.value) {
			setSearchKey(" ")
		}
	})
	return (
		<div className="widget box">
			<div className="widget-header">
				<h4>Add New Members</h4>
				<input
					type="serach"
					data-testid="search-input"
					placeholder="search by email"
					ref={inputRef}
					onChange={handleChange}
				/>
			</div>
			<ul className="searchList flex-col">
				{searchList.map((item) => (
					<li className="flex-row" data-testid="user-list-item" onClick={() => handleClick(item.id)}>
						<p>{item.email}</p>
						<span className="material-symbols-outlined icon">add</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default AddMembers
