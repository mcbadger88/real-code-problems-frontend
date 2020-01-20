import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import CandidateProfileCard from '../components/CandidateProfileCard/CandidateProfileCard'
import {Link} from 'react-router-dom'
import axios from 'axios';

const CandidateProfile = (props) => {


    const [candidateProfile, setCandidateProfile] = useState(null)

    useEffect( 
        ()=>{
            console.log(props, 'why user in this case is undefined?')
            async function getCandidateProfile () {
                let response = await axios.get(`http://localhost:5000/candidates/user/${props.user._id}`, {
                    withCredentials: true
                })
                const {data} = response
                setCandidateProfile(data)
                console.log(data, 'check data')

                
            } 
            getCandidateProfile()
            console.log(candidateProfile, 'getProfileAfter useEffects runs')
        }, []
    )

    return (
        <>
        <NavBar user={props.user}/>
        <h1>CandidateProfile Page HERE !</h1>
        {candidateProfile ? <CandidateProfileCard {...props} foundCandidateProfile={candidateProfile}/> : 
        <p><Link to='/candidate/new'>No Profile Yet. Create your profile</Link></p>}
        </>
    )
}

export default CandidateProfile