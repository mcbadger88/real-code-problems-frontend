import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import CandidateProfileCard from '../components/CandidateProfileCard'
import {Link} from 'react-router-dom'

const CandidateProfile = (props) => {
    console.log(props)
    return (
        <>
        <NavBar />
        <h1>CandidateProfile HERE !</h1>
        <CandidateProfileCard {...props}/>
        <p><Link to='/candidate/new'>Create your profile</Link></p>
        </>
    )
}

export default CandidateProfile