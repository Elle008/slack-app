import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/')
  }

  const goToWorkspace = () => {
    navigate('/create-workspace')
  }

  return ( 
    <div className="col">
      <img src={logo} alt="logo" className="logo"/>
      <form action="" onSubmit={goToWorkspace}>
        <input id="fullName" className='placeholder-text' placeholder="Full Name" />
        <input type="email" className='placeholder-text' placeholder="Email Address"/>
        <input type="password" className='placeholder-text' placeholder="Password"/>
        <input type="password" className='placeholder-text' placeholder="Confirm Password"/>
        <button type="submit">Create Account</button>
        <a onClick={goToLogin}>Sign in with existing account</a>
      </form>
    </div>
  );
}
 
export default SignUpForm;