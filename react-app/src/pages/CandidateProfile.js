import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import CandidateProfileCard from '../components/CandidateProfileCard'
import {Link} from 'react-router-dom'
import {candidates} from '../api/candidate'

const CandidateProfile = (props) => {
    console.log(props,'getting anything')

    const [candidate, setCandidate] = useState(null)

    useEffect( 
        ()=>{
            let foundCandidate = candidates.find((candidate) => candidate.user_id == props.match.params.id)
            setCandidate(foundCandidate)
        }, []
    )

    return (
        <>
        <NavBar />
        <h1>CandidateProfile HERE !</h1>
        {candidate ? <CandidateProfileCard {...props} foundCandidate={candidate}/> : <p><Link to='/candidate/new'>Create your profile</Link></p>}
        </>
    )
}

export default CandidateProfile