import React from 'react';
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import EditCandidateProfile from './pages/EditCandidateProfile'
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

const Router = ({user}) => {
  console.log(user, 'user from router');
  return (
    
    <Switch>
        <Route
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
          exact path='/challenges/:challID/attempts/:attemptID/edit'
          render={({ location, match }) => (
            <SubmitSubmission
              challengeID={match.params.challID}
              attemptID={match.params.attemptID}
            />
          )}
        />
        <Route
          exact path='/candidates/:id/attempts'
          render={({match}) => (
            <MyChallengeSubmissions
              challengeID={match.params.challengeID}
            />
          )}
        />
        <Route
          exact path='/challenges/:id/attempts'
          component={ViewAllChallengeSubmissions}
        />
        <Route
          exact path='/candidates/user/:id'
          render={(props) => {return <CandidateProfile user={user} />}}
        />

        <Route
          exact path='/signup'
          component={SignUp}
        />

        <Route
          exact path='/' render={(props) => (<Home user={user}/>)}
        />

        <Route
          exact path='/results/:id'
          component={ViewResults}
        />

        <Route 
          exact path='/unauthorised'
          render={() => <h1>You don't have the right to access this page! Please Login!</h1>}
        />

      <ProtectedRoute
          exact path='/candidates/:id/edit'
          user={user} component={EditCandidateProfile}
       />

        

        {/* <Route
          exact path='/profilecreated'
          render={()=><p>Profile Created</p>}
        /> */}

    </Switch>
    )}
export default Router 
