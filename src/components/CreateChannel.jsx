import React, { useState } from "react";

const CreateChannel = ({showCreateChannel, setShowCreateChannel}) => {
  
  const closeModal = (e) => {
    e.preventDefault()
    setShowCreateChannel(false)
  }
  return (
    <div className="full-modal" style={ showCreateChannel ? {display: 'flex'} : {display: 'none'}}>
      <form action="">
        <h3>Create Channel</h3>
        <label htmlFor="channelName">Channel Name</label>
        <input id="channelName" />
        <label htmlFor="description" className="flex-row">
          Description
          <p>(Optional)</p>
        </label>
        <textarea></textarea>
        <button>Create Channel</button>
        <button className="close"
          onClick={closeModal}>
          <span class="material-symbols-outlined">cancel</span>
        </button>
      </form>
    </div>
  );
}
 
export default CreateChannel;