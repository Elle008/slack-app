import SidePanel from "../components/SidePanel";
import Header from "../components/Header";
import CreateChannel from "../components/CreateChannel";
import CreateEvent from "../components/CreateEvent";
import Posts from "../components/Posts";
import NewPost from "../components/NewPost";
import Chat from "../components/Chat";

const Slack = () => {
  return (
    <div>
      <Header/>
      <SidePanel/>
      <NewPost/>
      <Posts/>
      <CreateChannel/>
      <CreateEvent/>
      <Chat/>
      
    </div>
    
  );
}
 
export default Slack;