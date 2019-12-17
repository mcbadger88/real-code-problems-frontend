import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import AvailableChanllenges from '../components/AvailableChallenges/AvailableChallenges'

const BrowseChallenges = () => {
    return (
        <>
        <NavBar />
        <h1>BROWSE CHALLENGES HERE !</h1>
        <AvailableChanllenges />
        </>
    )
}

export default BrowseChallenges