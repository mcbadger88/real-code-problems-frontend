import React, { useState, useEffect } from 'react';
import styles from './CandidateProfile.module.css'

import NavBar from '../components/NavBar/NavBar'
import CandidateProfileCard from '../components/CandidateProfileCard/CandidateProfileCard'


import {Link} from 'react-router-dom'
import axios from 'axios';


const CandidateProfile = (props) => {

    console.log(props)
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
            console.log(candidateProfile, 'getProfileAfter useEffects runs')
        }, []
    )

    return (
        <>
        <NavBar user={props.user}/>
        <h1 className={styles.PageHeader}>Your user profile</h1>
        {
        candidateProfile ? 
        <CandidateProfileCard {...props} foundCandidateProfile={candidateProfile}/> : 
        <p><Link to='/candidate/new'>No Profile Yet. Create your profile</Link></p>
        }
        </>
    )
}

export default CandidateProfile