import React, {useState} from 'react';
import { Outlet } from 'react-router-dom'
import SidePanel from "../components/SidePanel";
import Header from "../components/Header";
import CreateChannel from "../components/CreateChannel";

const Slack = () => {
  const [showCreateChannel, setShowCreateChannel] = useState(false)
  
  return (
    <div>
      <Header/>
      <section className="flex-row">
        <SidePanel setShowCreateChannel={setShowCreateChannel}/>
        <Outlet/>
      </section>
      <CreateChannel showCreateChannel={showCreateChannel} setShowCreateChannel={setShowCreateChannel}/>    
    </div>
    
  );
}
 
export default Slack;