import WorkspaceForm from "../components/Workspace/WorkspaceForm";

const CreateWorkspacePage = ({userId}) => {
  return (
    <WorkspaceForm userId={userId}/>
  );
}
 
export default CreateWorkspacePage;