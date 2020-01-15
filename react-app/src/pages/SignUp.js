import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import auth from '../api/auth'
import Axios from 'axios';

const SignUp = (props) => {
    return(
        <>
        <NavBar />
        <h2>This is the Signup Page</h2>
        <br />
        <a href={`http://localhost:5000/user/gitauth`}>Log in with github</a>
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