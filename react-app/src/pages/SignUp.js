import React from 'react';
import NavBar from '../components/NavBar/NavBar'

const SignUp = () => {
    return(
        <>
        <NavBar />
        <h2>This is the Signup Page</h2>
        <a href={`${process.env.REACT_APP_BACKEND_BASE_URL}/user/gitauth`}>Log in with github</a>
        </>
    )
}

export default SignUp;