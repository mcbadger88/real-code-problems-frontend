import React from 'react';
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import CandidateProfileNew from './pages/CandidateProfileNew'
import BrowseChallenges from './pages/BrowseChallenges'
import ViewSingleChallenge from './pages/ViewSingleChallenge'
import SubmitSubmission from './pages/SubmitSubmission'
import MyChallengeSubmissions from './pages/MyChallengeSubmissions'
import ViewAllChallengeSubmissions from './pages/ViewAllChallengeSubmissions'
import CandidateProfile from './pages/CandidateProfile'
import AddChallenge from './pages/AddChallenge'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

const Router = ({user}) => {console.log(user);return (
  
    <Switch>
        <ProtectedRoute
          exact path='/challenges'
          user={user} component={BrowseChallenges}
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
        <ProtectedRoute
          exact path='/candidates/:id/attempts'
          user={user} component={MyChallengeSubmissions}
        />
        <Route
          exact path='/challenges/:id/attempts'
          component={ViewAllChallengeSubmissions}
        />
        <ProtectedRoute
          exact path='/candidates/user/:id'
          user={user} component={CandidateProfile}
        />

        <Route
          exact path='/signup'
          component={SignUp}
        />

        <Route
          exact path='/' render={(props) => (<Home user={user} {...props}/>)}
        />

        <Route 
          exact path='/unauthorised'
          render={() => <h1>You don't have the right to access this page! Please Login!</h1>}
        />

        <ProtectedRoute
          exact path='/candidate/new'
          user={user} component={CandidateProfileNew}
        />

        <Route
          exact path='/profilecreated'
          render={()=><p>Profile Created</p>}
        />

    </Switch>
    )}
export default Router 