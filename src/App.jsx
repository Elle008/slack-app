import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
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
import TestApi from "./pages/Testapi";


function App() {
  const [user, setUser] = useState({
    userId:'',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='sign-up'element={<SignUpPage user={user} setUser={setUser} />} />
      <Route path='workspaces'element={<WorkspacePage />} />
      <Route path='create-workspace'element={<CreateWorkspacePage />} />
      <Route path='api-test'element={<TestApi />} />
      <Route path='app' element={<Slack />}>
        <Route index element={<Dashboard />} />
        <Route path='channel' element={<Channel />} />
        <Route path='saved' element={<Saved />} />
        <Route path='events' element={<Events />} />
        <Route path='message' element={<Message />} />
      </Route>
    </Routes>
  );
}

export default App;
