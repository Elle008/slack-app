import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import WorkspacePage from "./pages/WorkspacePage";
import CreateWorkspacePage from "./pages/CreateWorkspacePage";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='/workspace'element={<WorkspacePage />} />
      <Route path='/create-workspace'element={<CreateWorkspacePage />} />
    </Routes>
  );
}

export default App;
