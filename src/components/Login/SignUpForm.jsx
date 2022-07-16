import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isEmail } from "../../helpers/emailValidation";

const SignUpForm = ({user, setUser}) => {
  const navigate = useNavigate()
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    setUser(prev => ({...prev, [e.target.name]: e.target.value}))
    setError(prev => ({...prev, [e.target.name]: ''}))
  }

  const validateInput = (e) => {
    switch(e.target.name) {
      case 'username':
        if (!e.target.value) {
          setError(prev => ({...prev, username: 'Name is required'}))
          break
        }

      case 'email':
        if (!e.target.value) {
          setError(prev => ({...prev, email: 'Email is required'}))
          break
        }

        else if (!isEmail(e.target.value)) {
          setError(prev => ({...prev, email: 'Invalid email address'}))
        }

      case 'password':
        if (!e.target.value) {
          setError(prev => ({...prev, password: 'Create a password'}))
          break
        }

      case 'confirmPassword':
        if (!e.target.value) {
          setError(prev => ({...prev, confirmPassword: 'Confirm your password'}))
        }
        
        else if (e.target.value !== user.password) {
          setError(prev => ({...prev, confirmPassword: 'Password doesnt match'}))
        }
    }
  }
  
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
        {error.username && <p className="error">{error.username}</p>}
        <input 
          value={user.username} 
          name='username' 
          placeholder="Full Name"
          onBlur={validateInput}
          onChange = {handleInputChange}
        />
        {error.email && <p className="error">{error.email}</p>}
        <input 
          value={user.email} 
          name='email' 
          placeholder="Email Address"
          onBlur={validateInput}
          onChange = {handleInputChange}
        />
        {error.password && <p className="error">{error.password}</p>}
        <input 
          value={user.password} 
          name='password' 
          type="password" 
          placeholder="Password"
          onBlur={validateInput}
          onChange = {handleInputChange}
        />
        {error.confirmPassword && <p className="error">{error.confirmPassword}</p>}
        <input 
          value={user.confirmPassword} 
          name='confirmPassword' 
          type="password" 
          placeholder="Confirm Password"
          onBlur={validateInput}
          onChange = {handleInputChange}
        />
        <button type="submit">Create Account</button>
        <a onClick={goToLogin}>Sign in with existing account</a>
      </form>
    </div>
  );
}
 
export default SignUpForm;