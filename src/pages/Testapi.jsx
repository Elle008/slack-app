import React, { useEffect, useState } from 'react';

const TestApi = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [users, setUsers] = useState(['test', 'test2'])
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirm: ''
  })
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })
  
 

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const data = {
  //     email: user.email,
  //     password: user.password,
  //     password_confirmation: user.confirm
  //   }
    
  //   fetch('http://206.189.91.54/api/v1/auth/', {
  //     method: 'POST',
  //     mode: 'no-cors',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((response) => {
  //     console.log(response)
  //     return response.json()
  //   })
  //   .then((result) => {
  //     console.log(result)
  //   })
  // }

  // const fetchData = () => {
  //   setIsLoading(true)
  //   fetch('http://206.189.91.54/api/v1/users')
  //     .then((response) => response.json)
  //     .then((result) => {
  //       setUsers(result)
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       setError(error)
  //       setIsLoading(false)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div>
      <form>
        Sign up
        <input type="text" placeholder="email" value={user.email} onChange={(e) => {
          setUser(prev => ({...prev, email: e.target.value}))
        }}/>
        <input type="text" placeholder="password" value={user.password} onChange={(e) => {
          setUser(prev => ({...prev, password: e.target.value}))
        }}/>
        <input type="text" placeholder="confirm" value={user.confirm} onChange={(e) => {
          setUser(prev => ({...prev, confirm: e.target.value}))
        }}/>
        <button type="submit">Sign Up</button>
      </form>
    
      {error && <p>error.message</p>}
      {isLoading && <p>Loading...</p>}
      <ul>

      </ul>
    </div>
  );
}
 
export default TestApi;