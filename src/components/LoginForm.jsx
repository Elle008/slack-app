import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate()
  const goToSignUp = () => {
    navigate('/sign-up')
  }
  return ( 
    <div className="col">
      <img src={logo} alt="logo" className="logo"/>
      <form action="">
        <input type="email" placeholder="alternate_email"/>
        <input type="password" placeholder="lock"/>
        <button type="submit">Sign In</button>
        <a onClick={goToSignUp}>Don't have an account? Create Account</a>
      </form>
    </div>
   );
}
 
export default LoginForm;