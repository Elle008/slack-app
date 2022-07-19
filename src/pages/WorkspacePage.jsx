import WorkspaceList from "../components/Workspace/WorkspaceList";
import { Outlet } from "react-router-dom";

const WorkspacePage = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
}
 
export default WorkspacePage;