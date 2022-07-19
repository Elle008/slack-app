import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import { syncWithLocal } from "./helpers/saveToLocal";
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


function App() {
  const [user, setUser] = useState({
    id:'',
    username: '',
    email: '',
    password: '',
    image: '',
    accessToken:'',
    expiry: '',
    client: '',
    workspaces: [],
  })

  const [currentWorkspace, setCurrentWorkspace] = useState({
    name:'',
    members:[],
    channels: []
  })
  
  useEffect(() => {
    syncWithLocal(user.id, user, setUser)
  }, [user.id])

  useEffect(() => {
    console.log(user);
    console.log(currentWorkspace);
  },[currentWorkspace])

  return (
    <Routes>
      <Route index element={<LoginPage user={user} setUser={setUser}/>} />
      <Route path='sign-up' element={<SignUpPage user={user} setUser={setUser} />} />
      <Route path='workspace' element={<WorkspacePage />}>
        <Route index element={<WorkspaceList
          workspaces={user.workspaces}
          setCurrWorkspace={setCurrentWorkspace}
          />}/>
        <Route path='create' element={<WorkspaceForm
          user={user}
          setUser={setUser}
          setCurrWorkspace={setCurrentWorkspace}/>} />
      </Route>
      <Route path='app' element={<Slack
        user={user}
        currWorkspace={currentWorkspace}
        setCurrWorkspace={setCurrentWorkspace}
      />}>
        <Route index element={<Dashboard 
          user={user}
          currWorkspace={currentWorkspace}
        />} />
        <Route path='channel' element={<Channel />} />
        <Route path='saved' element={<Saved />} />
        <Route path='events' element={<Events />} />
        <Route path='message' element={<Message />} />
      </Route>
    </Routes>
  );
}

export default App;
