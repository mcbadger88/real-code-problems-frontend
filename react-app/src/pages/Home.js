import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar.jsx'

const Home = ({user}) => {
    console.log(user, 'props from home')
    return (
        <>
        <NavBar user={user}/>
        <h1>HOME HERE !</h1>
        </>
    )
}

export default Home