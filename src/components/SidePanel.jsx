import logo from '../assets/workspacecover.png'

const SidePanel = () => {
  return (
    <div className="side flex-col pad-s">
      <div className="user flex-row">
        <img src={logo} className='round-img-s'/>

        <div>
          <div class='flex-row pad-s%'>
            Ellaine Dela Cruz
            <span class="material-symbols-outlined">settings</span>
          </div>
          <div className="flex-row">
            <p>Workspace1</p>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </div>
        </div>
      </div>
      <ul className="nav">
        <li className="flex-row">Channel
          <span class="material-symbols-outlined">add</span>
        </li>
      </ul>
    </div>
  );
}
 
export default SidePanel;