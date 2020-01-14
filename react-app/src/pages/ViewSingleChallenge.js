import NavBar from '../components/NavBar/NavBar'
import React, { useState, useEffect } from 'react';
import { getFeatures } from '../api/feature'
import styles from './ViewSingleChallenge.module.css'
import ChallengeDescription from '../components/ChallengeDescription/ChallengeDescription'
import Feature from '../components/ChallengeFeature/ChallengeFeature'
import { getSingleChallenge } from '../api/challenge'



const ViewSingleChallenge = (challengeID) => {
    const [features, setFeatures] = useState(null)
    const [challenge, setChallenge] = useState(null)

    useEffect(() => {
        console.log(features)

    }, [ features ])

    useEffect( async () => {
        // Replace with API call
        // getAllChallenges().then(response => {
        //   setChallenges(response)
        // })
        const chall = await getSingleChallenge(challengeID.challengeID)
        setChallenge(chall)
      }, [ ])

    useEffect( async () => {
        const feats = await getFeatures(challengeID.challengeID)
        console.log(`features ${feats}`)
        setFeatures(feats)
    }, [])

    // Challenge Container (60% width)
    // Left hand column container
    //  Subtask Container (make it 60%)
    //  Button area (make it 40% of height)

    // 1. do layout V
    // 2. Render challenge and feature info (not images)
    // 3. add buttons
    // 3.5 make buttons conditional
    // 4. Add image toggling
    // 5. Add slider? find name of the thing ! move to a seperate card

    return (
        <>
        <NavBar />
        <div className={styles.container}>
            <div className={styles.leftHandContainer}>
                <ChallengeDescription challenge={challenge}/>
                <div className={styles.buttonArea}> button area</div>
            </div>
            <div className={styles.rightHandContainer}>
                <div className={styles.featureArea}>
                    {features && features.map((feature) => 
                    <Feature feature={feature} totalFeatures={features.length}/>
                    )}
                </div>

            </div>
        </div>
        </>
    )
}

export default ViewSingleChallenge