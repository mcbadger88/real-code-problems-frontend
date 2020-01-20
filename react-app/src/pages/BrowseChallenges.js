import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import AvailableChallenges from '../components/AvailableChallenges/AvailableChallenges'

const BrowseChallenges = ({user}) => {
    return (
        <>
        <NavBar user={user}/>
        <h1>Welcome !</h1>
        <div>
            <h2 >Featured challenges</h2>
            <AvailableChallenges />
        </div>

        <div>
            <h2>View all</h2>
            <AvailableChallenges />
        </div>
        </>
    )
}

export default BrowseChallenges