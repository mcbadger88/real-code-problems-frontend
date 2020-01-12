import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import AvailableChanllenges from '../components/AvailableChallenges/AvailableChallenges'

const BrowseChallenges = (props) => {
    console.log(props)
    return (
        <>
        <NavBar />
        <h1>Welcome !</h1>
        <div>
            <h2 >Featured challenges</h2>
            <AvailableChanllenges />
        </div>

        <div>
            <h2>View all</h2>
            <AvailableChanllenges />
        </div>
        </>
    )
}

export default BrowseChallenges