import React, { useState, useEffect } from 'react';
import Router from './Router'
import axios from 'axios'

function App() {

  // Local State
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(false)

  useEffect(() => {

    const getUserData = async () => {
      try {
        let response = await axios.get('http://localhost:5000/user/current', {
          withCredentials: true
        })
        const user = response.data
        setUser(user)
        
      } catch(err) {
        console.log(err)
      }
    }

    getUserData()
  }, [])

  //the above code generate random userID from 1 to 2;

  // Hi! The idea for the function below is that it will hit a route in the backend when somebody loads the page for the first time or logs in.

  // The url it will hit in the backend is "http://localhost:5000/user/current"
  // If there is a user logged in, this will return all of their user information. If there is no user logged in, this will return false.

  // We can then pass down the output of this function to the components that need the user information, or need to know if somebody is logged in. I didn't know how to write this using hooks, so I wrote it in the syntax that I know and thought I would leave this note so that we both know what it does and can revise it in future. Thanks! - Taya.
  // state = {
  //   currentUser: null
  // }

  // componentDidMount = async () => {
  //   const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/user/current`
  //   const currentUser = await axios.get(url)

  //   this.setState(
  //     { currentUser: currentUser }
  //   )

  //   console.log(this.state)
  // }

  return loading ? (
    <div>Loading...</div>
  ) : (
      <Router user={user}/>
  );
}

export default App;
