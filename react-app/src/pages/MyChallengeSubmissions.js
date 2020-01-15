import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'

const MyChallengeSubmissions = ({user}) => {
    console.log(user)
    return (
        <>
        <NavBar user={user} />
        <h1>MY CHALLENGE SUBMISSIONS HERE !</h1>
        </>
    )
}

export default MyChallengeSubmissions