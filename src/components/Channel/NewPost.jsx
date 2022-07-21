import React, { useEffect, useRef, useState } from 'react';
import api from "../../api/api";
import { sendMessageURL } from "../../api/url";
import photo from '../../assets/profile.png'

const NewPost = ({channelId, user}) => {
  const inputRef = useRef()
  const [post, setPost] = useState({
    receiver_id: Number(channelId),
    receiver_class: 'Channel',
    body: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post(sendMessageURL, post, {
        headers: {
          expiry: user.expiry,
          uid: user.email,
          "access-token": user.accessToken,
          client: user.client,
        }
      })
    }
    catch (error) {
      return (error);
    }
    inputRef.current.value = ''
  }

  const handleChange = (e) => {
    setPost(prev => ({...prev, body: e.target.value}))
  }


  return (
    <form className="new-post box flex-row" onSubmit={handleSubmit}>
      <img src={photo} className='img-xs' />
      <div className="flex-col">
        <textarea 
          placeholder="Tag @channel or @username on your post"
          ref={inputRef}
          onChange={handleChange}
          ></textarea>
        <button type="submit">Post</button>
      </div>
    </form>
  );
}
 
export default NewPost;