import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ChannelList from "./ChannelList";
import ChatTabs from "../DM/ChatTabs";

const SidePanel = ({setShowCreateChannel, setShowChatModal, chatWith, channelList, prevChats}) => {

  const openChannelModal = () => {
    setShowCreateChannel(true)
  }

  const openChatModal = () => {
    setShowChatModal(true)
  }

  return (
    <div className="side-panel flex-col">
      <div className="flex-col">
        <NavLink to={'/app'} className='tab flex-row'>
          Dashboard
        </NavLink>
      </div>
      <div className="flex-col">
        <nav className='tab flex-row'>
          Channel
          <span className="material-symbols-outlined icon" onClick={openChannelModal}>add</span>
        </nav>
        <ChannelList list={channelList}/>
      </div>
      <div className="flex-col">
        <NavLink to={'/app/saved'} className='tab flex-row'>
          Saved
        </NavLink>
      </div>
      <div className="flex-col">
        <NavLink to={'/app/events'} className='tab flex-row'>
          Events
        </NavLink>
      </div>
      <div className="flex-col">
        <nav className='tab flex-row'>
          Direct Message
          <span className="material-symbols-outlined icon" onClick={openChatModal}>add</span>
        </nav>
        <div className="flex-col sub-items">
          <NavLink to={`/app/message/${chatWith.id}`} className='sub-tab'>{chatWith.email}</NavLink>
          <ChatTabs prevChats={prevChats}/>

        </div>
      </div>
    </div>
  );
}
 
export default SidePanel;
