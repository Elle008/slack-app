import { NavLink } from "react-router-dom";

const SidePanel = ({setShowCreateChannel}) => {

  const handleClick = () => {
    setShowCreateChannel(true)
  }
  return (
    <div className="side-panel flex-col">
      <div className="flex-col">
        <NavLink to={'/app'} className='tab flex-row'>
          Dashboard
        </NavLink>
      </div>
      <div className="flex-col">
        <nav className='tab flex-row'>
          Channel
          <span className="material-symbols-outlined icon" onClick={handleClick}>add</span>
        </nav>
        <div className="flex-col sub-items">
          <NavLink to={'/app/channel'} className='sub-tab'>Topic 1</NavLink>
          <NavLink to={'/app/channel'} className='sub-tab'>Topic 1</NavLink>
        </div>
      </div>
      <div className="flex-col">
        <NavLink to={'/app/saved'} className='tab flex-row'>
          Saved
        </NavLink>
      </div>
      <div className="flex-col">
        <NavLink to={'/app/events'} className='tab flex-row'>
          Events
        </NavLink>
      </div>
      <div className="flex-col">
        <nav className='tab flex-row'>
          Direct Message
        </nav>
        <div className="flex-col sub-items">
          <NavLink to={'/app/message'} className='sub-tab'>User 1</NavLink>
          <NavLink to={'/app/message'} className='sub-tab'>User 1</NavLink>
          <NavLink to={'/app/message'} className='sub-tab'>User 1</NavLink>
        </div>
      </div>
    </div>
  );
}
 
export default SidePanel;
