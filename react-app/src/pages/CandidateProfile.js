import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import {Link} from 'react-router-dom'

const CandidateProfile = () => {
    return (
        <>
        <NavBar />
        <h1>CandidateProfile HERE !</h1>
        <p><Link to='/candidate/new'>Create your profile</Link></p>
        </>
    )
}

export default CandidateProfile