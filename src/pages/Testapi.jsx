import React, { useEffect, useState } from 'react';

const TestApi = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [users, setUsers] = useState(['test', 'test2'])
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirm: '',
    accessToken:'',
    expiry: '',
    client: ''
  })
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })
  
 

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: user.email,
      password: user.password,
      password_confirmation: user.confirm
    }
    
    fetch('http://206.189.91.54/api/v1/auth/sign_in', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setUser(prev => ({...prev, accessToken: response.headers.get('access-token') }) )
      setUser(prev => ({...prev, expiry: response.headers.get('client') }) )
      setUser(prev => ({...prev, client: response.headers.get('expiry') }) )
    })
  }

  // const fetchData = () => {
  //   setIsLoading(true)
  //   fetch('http://206.189.91.54/api/v1/users', {
  //     headers: {
  //       'expiry': user.expiry,
  //       "uid": user.email,
  //       "access-token": user.accessToken, 
  //       "client": user.client
  //     }
  //   })
  //     .then((response) => {
  //       setUsers(response)
  //       return response.json()})
  //     .then((result) => {
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       setError(error)
  //       setIsLoading(false)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [user.accessToken])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Sign up
        <input type="text" placeholder="email" value={user.email} onChange={(e) => {
          setUser(prev => ({...prev, email: e.target.value}))
        }}/>
        <input type="text" placeholder="password" value={user.password} onChange={(e) => {
          setUser(prev => ({...prev, password: e.target.value}))
        }}/>
        
        <button type="submit">Sign Up</button>
      </form>
    
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {users.map(item => <p>{item}</p>)}
      </ul>
    </div>
  );
}
 
export default TestApi;