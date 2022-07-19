import React, { useRef, useState, useEffect } from "react";
import { isEmail } from "../helpers/emailValidation";
import api from "../api/api";
import { createChannelURL } from "../api/url";

const CreateChannel = ({showCreateChannel, setShowCreateChannel, user, setCurrWorkspace}) => {
  const inputRef = useRef()
  const [channel, setChannel] = useState({
    id: -1,
    name: '',
    members: []
  })
  const [error, setError] = useState({
    nameInput: '',
    membersInput: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (channel.name) {
      const data = {
        name: channel.name,
        user_ids: [2366]
      }
      try {
        const response = await api.post(createChannelURL, data, {
          headers: {
          'expiry': user.expiry,
          'uid': user.email,
          'access-token': user.accessToken, 
          "client": user.client
          }
        })

        setChannel(prev => ({...prev, id: response.data.data['id']}))
        closeModal()
      }
      catch (error) {
        setError(prev => ({...prev, nameInput: error.response.data.errors }))
      }


    }
    else if (!channel.name) {
      setError(prev => ({...prev, nameInput: 'Please add a name for your channel'}))
    }
  }

  const handleChange = (e, input) => {
    setError(prev => ({...prev, [input]: ''}))

    if (input === 'nameInput') {
      setChannel(prev => ({...prev, name: e.target.value}))
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (isEmail(e.target.value)) {
        setChannel(prev => ({...prev, members: [...prev.members, e.target.value]}))
      }
      else {
        setError(prev => ({...prev, membersInput: 'Invalid email address'}))
      }      
    }
  }

  const deleteEmail = (deleted) => {
    const filteredMembers = channel.members.filter(i => i !== deleted)
    setChannel(prev => ({...prev, members: filteredMembers}))
  }

  const closeModal = (e) => {
    setShowCreateChannel(false)
  }

  useEffect(() => {
    inputRef.current.value = ''
  }, [channel])

  useEffect(() => {
    setCurrWorkspace(prev => ({...prev, channels: [...prev.channels, channel]}))
  }, [channel.id])
  

  return (
    <div className="full-modal" style={ showCreateChannel ? {display: 'flex'} : {display: 'none'}}>
      <form onSubmit={handleSubmit}>
        <h3>Create Channel</h3>
        <label>Channel Name</label>
        {error.nameInput && <p className="error">{error.nameInput}</p>}
        <input
          placeholder="Ex. Announcements or Project X"
          onChange={e => handleChange(e, 'nameInput')}
        />
        <label className="flex-row">
          Add select teammates to this channel
          <p>(Optional)</p>
        </label>
        {error.membersInput && <p className="error">{error.membersInput}</p>}
        <input
          placeholder="Type email address then press Enter"
          ref={inputRef}
          onChange={e => handleChange(e, 'membersInput')}
          onKeyPress={handleKeyPress}
        />
        <div className="chips-container">
          {channel.members.map(item => {
            return <div className="chips flex-row">
              <p>{item}</p>
              <span className="material-symbols-outlined" onClick={() => deleteEmail(item)}>close</span>
            </div>
          })}
        </div>
        <button>Create Channel</button>
        <button className="close"
          onClick={closeModal}>
          <span className="material-symbols-outlined">cancel</span>
        </button>
      </form>
    </div>
  );
}
 
export default CreateChannel;