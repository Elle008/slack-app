import React, {useState} from 'react';
import { Outlet } from 'react-router-dom'
import SidePanel from "../components/Menu/SidePanel";
import Header from "../components/Menu/Header";
import CreateChannel from "../components/CreateChannel";
import AccountSettings from "../components/Menu/Account";

const Slack = ({user, currWorkspace, setCurrWorkspace}) => {
  const [showCreateChannel, setShowCreateChannel] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  
  return (
    <div>
      <Header user={user} currWorkspace={currWorkspace} setShowSettings={setShowSettings}/>
      <section className="flex-row">
        <SidePanel setShowCreateChannel={setShowCreateChannel} currWorkspace={currWorkspace} user={user}/>
        <Outlet/>
      </section>
      <CreateChannel
        showCreateChannel={showCreateChannel}
        setShowCreateChannel={setShowCreateChannel}
        user={user}
        setCurrWorkspace={setCurrWorkspace}
      />
      <AccountSettings
      user={user}
      currWorkspace={currWorkspace}
      showSettings={showSettings}
      setShowSettings={setShowSettings}

      />    
    </div>
    
  );
}
 
export default Slack;