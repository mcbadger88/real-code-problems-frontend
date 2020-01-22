import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import auth from '../api/auth'
import Axios from 'axios';

const SignUp = (props) => {
    console.log(props)
    return(
        <>
        <NavBar user={props.user} candidateID={props.candidateID} />
        <h2>This is the Signup Page</h2>
        <br />
        <a href={`${process.env.REACT_APP_BACKEND_BASE_URL}/user/gitauth`}>Log in with github</a>
        <br />
        <a href={`${process.env.REACT_APP_BACKEND_BASE_URL}/user/logout`}>Log out</a>
        </>
    )
}

export default SignUp;


// file

// export default Axios.create({
//     baseURL: process.env.BACKEND_URL,
//     withCredentials: true
// })

// import myHttp from 'that-file ^'

// myHttp.get("/user/current")