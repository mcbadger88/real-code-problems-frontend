import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BrowseChallenges from './pages/BrowseChallenges'
import ViewSingleChallenge from './pages/ViewSingleChallenge'
import SubmitSubmission from './pages/SubmitSubmission'
import MyChallengeSubmissions from './pages/MyChallengeSubmissions'
import ViewAllChallengeSubmissions from './pages/ViewAllChallengeSubmissions'
import CandidateProfile from './pages/CandidateProfile'
import AddChallenge from './pages/AddChallenge'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
// import axios from "axios"

function App() {

  // Local State
  const [loading, setLoading] = useState(false);

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
    <Router>
      <Switch>
        <Route
          exact path='/challenges'
          component={BrowseChallenges}
        />
        <Route
          exact path='/challenges/new'
          component={AddChallenge}
        />
        <Route
          exact path='/challenges/:id'
          component={ViewSingleChallenge}
        />
        <Route
          exact path='/challenges/:id/attempts/:id/edit'
          component={SubmitSubmission}
        />
        <Route
          exact path='/candidates/:id/attempts'
          component={MyChallengeSubmissions}
        />
        <Route
          exact path='/challenges/:id/attempts'
          component={ViewAllChallengeSubmissions}
        />
        <Route
          exact path='/candidates/:id'
          component={CandidateProfile}
        />

        <Route
          exact path='/signup'
          component={SignUp}
        />

        <Route
          exact path='/'
          component={Home}
        />


      </Switch>
    </Router>
  );
}

export default App;
