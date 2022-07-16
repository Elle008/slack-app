import React from 'react';

const NewChat = () => {
  return (
    <form className="new-chat">
      <textarea></textarea>
      <button type="submit" className="icon-btn">
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}
 
export default NewChat;