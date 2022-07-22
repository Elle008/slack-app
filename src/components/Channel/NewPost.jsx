import React, { useEffect, useRef, useState } from 'react';
import api from "../../api/api";
import { headers } from "../../api/headers";
import photo from '../../assets/profile.png'

const NewPost = ({channelId, user}) => {
  const inputRef = useRef()

  const [post, setPost] = useState({
    receiver_id: 0,
    receiver_class: 'Channel',
    body: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('/api/v1/messages', post, {
        headers: headers
      })
      setPost(prev => ({...prev, body: ''}))
    }
    catch (error) {
      return (error);
    }
  }

  const handleChange = (e) => {
    setPost(prev => ({...prev, body: e.target.value}))
  }
  
  useEffect(() => {
    setPost(prev => ({...prev, receiver_id: Number(channelId)}))
  }, [channelId])


  return (
    <form className="new-post box flex-row" onSubmit={handleSubmit}>
      <img src={photo} className='img-xs' />
      <div className="flex-col">
        <textarea 
          placeholder="Tag @channel or @username on your post"
          value={post.body}
          ref={inputRef}
          onChange={handleChange}
          ></textarea>
        <button type="submit">Post</button>
      </div>
    </form>
  );
}
 
export default NewPost;