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

function App() {

  // Local State
  const [loading, setLoading] = useState(false);

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
