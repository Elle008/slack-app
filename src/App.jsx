import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import WorkspacePage from "./pages/WorkspacePage";
import CreateWorkspacePage from "./pages/CreateWorkspacePage";
import SignUpPage from "./pages/SignUpPage";
import Slack from "./pages/Slack";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='/sign-up'element={<SignUpPage />} />
      <Route path='/workspaces'element={<WorkspacePage />} />
      <Route path='/create-workspace'element={<CreateWorkspacePage />} />
      <Route path='/app' element={<Slack />} />
    </Routes>
  );
}

export default App;
