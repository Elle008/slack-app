import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import api from "../../api/api";
import { saveToLocal } from "../../helpers/saveToLocal";
import { searchUser } from "../../helpers/searchUsers";

const LoginForm = ({user, setUser}) => {
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = (e, input) => {
    setUser(prev => ({...prev, [input]: e.target.value}))
    setError()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: user.email,
      password: user.password
    }
    try  {
      const response = await api.post('/api/v1/auth/sign_in', data )

      setUser(prev => ({...prev, accessToken: response.headers['access-token']}))
      setUser(prev => ({...prev, expiry: response.headers['expiry']}))
      setUser(prev => ({...prev, client: response.headers['client']}))
      setUser(prev => ({...prev, id: response.data.data['id']}))

      navigate('/workspace', { replace: true })
    }
    catch (error) {
      setError(error.response.data.errors)
    }
  }
  
  const goToSignUp = () => {
    navigate('/sign-up')
  }

  return ( 
    <div className="col">
      <img src={logo} alt="logo" className="logo"/>
      <form className="login" onSubmit={handleSubmit}>
        {error && error.map(err => <p className="error">{err}</p>)}
        <input
          placeholder="alternate_email"
          value={user.email}
          onChange={(e) => {handleChange(e, 'email')}}
        />
        <input
          type="password"
          autoComplete='off'
          placeholder="lock"
          value={user.password}
          onChange={(e) => {handleChange(e, 'password')}}
        />
        <button type="submit">Sign In</button>
        <a onClick={goToSignUp}>Don't have an account? Create Account</a>
      </form>
    </div>
  );
}
 
export default LoginForm;