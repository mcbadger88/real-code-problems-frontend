import NavBar from '../components/NavBar/NavBar'
import React, { useState, useEffect } from 'react';
import { getSingleChallenge } from '../api/challenge'
import { getFeatures } from '../api/feature'


const ViewSingleChallenge = ({challengeID}) => {
    const [features, setFeatures] = useState(null)
    const [challenge, setChallenge] = useState(null)

    useEffect(() => { 
        async function receiveChallenge() {
        const challs = await getSingleChallenge(challengeID)
        setChallenge(challs)
        }
        receiveChallenge();
        
      }, [])

    useEffect(() => {
        async function receiveFeats() {
        const feats = await getFeatures(challengeID)
        setFeatures(feats)
        }
        receiveFeats();
    }, [])    

    return (
        <>
        <NavBar />
        <h1>VIEW SINGLE CHALLENGE HERE !</h1>
        <p>{challenge ? challenge.title : null }</p>
        <p>{features ? features[0].title : null }</p>
        { features ? <img src={features[0].scenarios[0].lineNumbers[0].helperImage}></img> : null }
        
        </>
    )
}

export default ViewSingleChallenge