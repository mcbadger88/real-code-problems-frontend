import React from 'react';
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import CandidateProfileNew from './pages/CandidateProfileNew'
import BrowseChallenges from './pages/BrowseChallenges'
import ViewSingleChallenge from './pages/ViewSingleChallenge'
import SubmitSubmission from './pages/SubmitSubmission'
import MyChallengeSubmissions from './pages/MyChallengeSubmissions'
import ViewAllChallengeSubmissions from './pages/ViewAllChallengeSubmissions'
import ViewResults from './pages/ViewResults'
import CandidateProfile from './pages/CandidateProfile'
import AddChallenge from './pages/AddChallenge'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

const Router = () => (
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
          render={({ location, match }) => (
            <ViewSingleChallenge
              challengeID={match.params.id}
            />
          )}
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

        <Route
          exact path='/results/:id'
          component={ViewResults}
        />

        <Route 
          exact path='/unauthorised'
          render={() => <h1>You don't have the right to access this page! Please Login!</h1>}
        />

        <Route
          exact path='/candidate/new'
          component={CandidateProfileNew}
        />
    </Switch>
    )
export default Router 