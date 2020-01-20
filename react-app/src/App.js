import React, { useState, useEffect } from 'react';
import Router from './Router'
import axios from 'axios'

function App() {
  const [user, setUser] = useState({
    auth: false,
    loading: true
  })

  useEffect(() => {

    const getUserData = async () => {
      try {
        let response = await axios.get('http://localhost:5000/user/current', {
          withCredentials: true
        })
        const user = response.data
        setUser({
          loading: false,
          auth: user
        })
      } catch(err) {
        setUser({
          loading: false,
          auth: false
        })  
      }
    }

    getUserData()
  }, [])

  console.log(user.auth)
  return user.loading ? (
    <div>Loading...</div>
  ) : (
      <Router user={user.auth}/>
  );
}

export default App;
