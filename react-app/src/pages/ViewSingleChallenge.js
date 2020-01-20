import NavBar from '../components/NavBar/NavBar'
import React, { useState, useEffect } from 'react';
import { getFeatures } from '../api/feature'
import styles from './ViewSingleChallenge.module.css'
import ChallengeDescription from '../components/ChallengeDescription/ChallengeDescription'
import Feature from '../components/ChallengeFeature/ChallengeFeature'
import ButtonArea from '../components/ChallengeButtonArea/ChallengeButtonArea'
import { getSingleChallenge } from '../api/challenge'
import {apiGetAttempt} from '../api/attempt'


const ViewSingleChallenge = ({challengeID}) => {
    const [features, setFeatures] = useState(null)
    const [challenge, setChallenge] = useState(null)
    const [selectedFeature, setSelectedFeature] = useState(null)
    const [challengeStatusChanged, setChallengeStatusChanged] = useState(false)
    const [challengeAttempt, setChallengeAttempt] = useState(null)

    useEffect(() => {
        console.log(features)

    }, [ features ])

    useEffect(() => {
        const getChallenge = async() => {
            const chall = await getSingleChallenge(challengeID)
            setChallenge(chall)
        }
        getChallenge()
      }, [ ])

    useEffect(() => {
        const getAllFeatures = async () => {
            const feats = await getFeatures(challengeID)
            console.log(`features ${feats}`)
            setFeatures(feats)
        }
        getAllFeatures()
    }, [])

    //see if the current user has an attempt that is in progress, set variable challengeStarted if active attempt exists for this chalenge and user
    useEffect(() => {
        const getStatus = async () => {
            const attempt = await apiGetAttempt(challengeID)
            setChallengeAttempt(attempt)
        }
        getStatus()
    }, [ challengeStatusChanged ])


    const toggleChallengeStatusChanged = () => {
        setChallengeStatusChanged(!challengeStatusChanged)
    }

    console.log("In ViewSingleChallenge")
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

    //render feature number based on click
    return (
        <>
        <NavBar />
        <div className={styles.container}>
            {challenge && challengeAttempt &&
            <>
            <h1>{challenge.title}: {challengeAttempt.status}</h1>
            <div className={styles.contentArea}>
                <div className={styles.leftHandContainer}>
                    <ChallengeDescription challenge={challenge}/>
                    <ButtonArea challenge={challenge} attempt={challengeAttempt} onChallengeStatusChange={toggleChallengeStatusChanged}/>

                </div>
                <div className={styles.rightHandContainer}>
                    <div className={styles.featureArea}> 
                        {features && selectedFeature &&
                        <Feature feature={selectedFeature} totalFeatures={features.length}/>
                        } 
                    </div>
                    {features && features.map((feature) => 
                        <button key={feature._id}
                        onClick={() => { setSelectedFeature(feature) }}
                        type="submit"
                        >Feature {feature.number}</button>
                        )
                    }
                </div>
            </div>
            </>
            }   
        </div>
        </>
    )
}

export default ViewSingleChallenge