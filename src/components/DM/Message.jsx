import React from 'react';
import Chatbox from "./Chatbox";
import NewChat from "./NewChat";

const Message = () => {
  return (
    <main className="message">
        <h3>
          Ellaine Dela Cruz
        </h3>
        <Chatbox/>
        <NewChat/>
    </main>
  );
}
 
export default Message;