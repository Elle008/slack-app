import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUpForm = ({user, setUser}) => {
  const navigate = useNavigate()
  const [error, setError] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
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
        <input 
          value={user.userName} 
          name='userName' 
          placeholder="Full Name"
        />
        <input 
          value={user.email} 
          name='email' 
          type="email" 
          placeholder="Email Address"
        />
        <input 
          value={user.password} 
          name='password' 
          type="password" 
          placeholder="Password"
        />
        <input 
          value={user.confirmPassword} 
          name='confirmPassword' 
          type="password" 
          placeholder="Confirm Password"
        />
        <button type="submit">Create Account</button>
        <a onClick={goToLogin}>Sign in with existing account</a>
      </form>
    </div>
  );
}
 
export default SignUpForm;