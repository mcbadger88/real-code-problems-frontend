import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import auth from '../api/auth'

const SignUp = (props) => {
    return(
        <>
        <NavBar />
        <h2>This is the Signup Page</h2>
        <a href={`http://localhost:5000/user/gitauth`}>Log in with github</a>
        <button onClick={(

        ) => auth.login(() => {props.history.push('/')})}>Sign In With Github</button>
        </>
    )
}

export default SignUp;