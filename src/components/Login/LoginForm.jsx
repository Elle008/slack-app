import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import { isEmail } from "../../helpers/emailValidation";

const LoginForm = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = (e, input) => {
    setLoginInput(prev => ({...prev, [input]: e.target.value}))
    setError('')
  }

  const validateInput = (e) => {
    if (!isEmail(e.target.value)) {
      setError('Invalid email address')
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    if (!error) {
      navigate('/workspaces')
    }
  }
  
  const goToSignUp = () => {
    navigate('/sign-up')
  }

  return ( 
    <div className="col">
      <img src={logo} alt="logo" className="logo"/>
      <form className="login" onSubmit={handleLoginSubmit}>
        {error && <p className="error">{error}</p>}
        <input
          placeholder="alternate_email"
          value={loginInput.email}
          onBlur={validateInput}
          onChange={(e) => {handleOnChange(e, 'email')}}
        />
        <input
          type="password"
          placeholder="lock"
          value={loginInput.password}
          onChange={(e) => {handleOnChange(e, 'password')}}
        />
        <button type="submit">Sign In</button>
        <a onClick={goToSignUp}>Don't have an account? Create Account</a>
      </form>
    </div>
  );
}
 
export default LoginForm;