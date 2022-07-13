import logo from '../assets/logo.png'
import photo from '../assets/profile.png'

const Header = () => {
  return (
    <header>
      <img src={logo} className='logo'/>

      <input type="search" placeholder="Search" />

      <div className="user flex-row">
        Ellaine Dela Cruz
        <br/>
        Workspace1
        <img src={photo} className='img-s'/>
      </div>

    </header>
  );
}
 
export default Header;