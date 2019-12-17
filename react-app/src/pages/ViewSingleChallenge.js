import NavBar from '../components/NavBar/NavBar'
import React, { useState, useEffect } from 'react';
import { getSingleChallenge } from '../api/challenge'
import { getFeatures } from '../api/feature'


const ViewSingleChallenge = (challengeID) => {
    const [features, setFeatures] = useState(null)
    const [challenge, setChallenge] = useState(null)

    useEffect(() => {
        console.log(challenge)
        console.log(challengeID.challengeID)
      }, [ challenge ])

    useEffect( async () => {
        // Replace with API call
        // getAllChallenges().then(response => {
        //   setChallenges(response)
        // })
        const challs = await getSingleChallenge(challengeID.challengeID)
        setChallenge(challs)
      }, [])

    useEffect(() => {
        console.log(features)

    }, [ features ])

    useEffect( async () => {
        const feats = await getFeatures(challengeID.challengeID)
        console.log(feats)
        setFeatures(feats)
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