import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import CandidateProfileCard from '../components/CandidateProfileCard'
import {Link} from 'react-router-dom'
import {candidates} from '../api/candidate'
import axios from 'axios';

const CandidateProfile = (props) => {


    const [candidateProfile, setCandidateProfile] = useState(null)

    useEffect( 
        ()=>{
            async function getCandidateProfile () {
                let response = await axios.get(`http://localhost:5000/candidates/user/${props.user._id}`, {
                    withCredentials: true
                })
                
                const {data} = response
                setCandidateProfile(data)
                
            } 
            getCandidateProfile()
           
        }, []
    )

    return (
        <>
        <NavBar user={props.user}/>
        <h1>CandidateProfile Page HERE !</h1>
        {candidateProfile ? <CandidateProfileCard {...props} foundCandidateProfile={candidateProfile}/> : <p><Link to='/candidate/new'>No Profile Yet. Create your profile</Link></p>}
        </>
    )
}

export default CandidateProfile