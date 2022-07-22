import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const NewChat = ({ setShowChatModal, showChatModal, users, setChatWith, chatWith }) => {
	const [searchList, setSearchList] = useState([users])
	const [searchKey, setSearchKey] = useState('')
	const navigate = useNavigate()
	const closeModal = () => {
		setShowChatModal(false)
	}

	const handleChange = (e) => {
		setSearchKey(e.target.value.toLowerCase())
	}

  const handleSelect = (selected) => {
    setChatWith(selected)
    closeModal()
		navigate(`/app/message/${selected.id}`)
  }

	useEffect(() => {
		const filteredUsers = users.filter(item => {
			return item.email.toLowerCase().includes(searchKey)
		})
		setSearchList(filteredUsers)
	}, [searchKey])

	return (
		<div className="new-chat" style={showChatModal ? { display: "flex" } : { display: "none" }}>
			<div className="side-panel flex-col">
				<span className="material-symbols-outlined" onClick={closeModal}>
					close
				</span>
				<input type="search" className="search" placeholder="search by email" onChange={handleChange}/>
				<div className="flex-col sub-items">
					{searchList.map((item) => (
						<div className="sub-tab"
            onClick={() => handleSelect(item)}
            >{item.email}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default NewChat
