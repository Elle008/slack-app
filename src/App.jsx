import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import { syncWithLocal } from "./helpers/saveToLocal";
import pic from './assets/profile.png'
import LoginPage from './pages/LoginPage';
import WorkspacePage from "./pages/WorkspacePage";
import CreateWorkspacePage from "./pages/CreateWorkspacePage";
import SignUpPage from "./pages/SignUpPage";
import Slack from "./pages/Slack";
import Dashboard from "./components/Dashboard";
import Channel from "./components/Channel/Channel";
import Saved from "./components/Saved/Saved";
import Events from "./components/Events/Events";
import Message from "./components/DM/Message";
import WorkspaceList from "./components/Workspace/WorkspaceList";
import WorkspaceForm from "./components/Workspace/WorkspaceForm";
import { allUsers } from "./helpers/searchUsers";


function App() {
  const [user, setUser] = useState({
    id:'',
    name: '',
    email: '',
    password: '',
    image: {pic},
    accessToken:'',
    expiry: '',
    client: '',
  })

  const [users, setUsers] = useState([])
  
  useEffect(() => {
    syncWithLocal(user.id, user, setUser)
    allUsers(user, setUsers)
  }, [user.id])

  useEffect(() => {
    console.log(users);
  }, [users])

  return (
    <Routes>
      <Route index element={<LoginPage user={user} setUser={setUser}/>} />
      <Route path='sign-up' element={<SignUpPage user={user} setUser={setUser} />} />
      <Route path='app' element={<Slack 
        user={user}
        users={users}
      />}>
        <Route index element={<Dashboard user={user}/>} />
        <Route path='channel' element={<Channel />} />
        <Route path='saved' element={<Saved />} />
        <Route path='events' element={<Events />} />
        <Route path='message' element={<Message />} />
      </Route>
    </Routes>
  );
}

export default App;
