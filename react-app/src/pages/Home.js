import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar.jsx'

const Home = (props) => {
    console.log(props, 'from home page')
    return (
        <>
        <NavBar {...props}/>
        <h1>HOME HERE !</h1>
        </>
    )
}

export default Home