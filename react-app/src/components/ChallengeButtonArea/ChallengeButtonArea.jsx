import React, { useState, useEffect } from 'react';
import styles from './ChallengeButtonArea.module.css';
import {isActiveAttempt, createAttempt} from '../../api/attempt'
import {disableChallenge} from '../../api/challenge'

const ChallengeButtonArea = ({challenge}) => {
    const [dockerFileLocation, setDockerFileLocation] = useState(null)
    const [challengeStarted, setChallengeStarted] = useState(null)

    
    //call set dockerfile variable
    useEffect( async () => {
        setDockerFileLocation(challenge.zipFileLocation)
    }, [])

    //create attempt in response to start challenge button
    const startChallenge = async (challenge) => {
        //create apttempt
        const success = await createAttempt(challenge._id)
        //set challenge started
        const started = await isActiveAttempt(challenge._id)
        setChallengeStarted(!started)
    }

    // in response to disable challenge, create disableChallene() and call the challenge update route

    //see if the current user has an attempt that is in progress, set variable challengeStarted if active attempt exists for this chalenge and user
    useEffect( async () => {
        const started = await isActiveAttempt(challenge._id)
        setChallengeStarted(started)
    }, [])

    // create submitAttempt() in response to submit solution button, add *figure out what to do this weekend*

    // in response to view submissions.. link to challenges/:id/attempts/





    return (
        <>
        <div className={styles.buttonArea}> 
            <div className={styles.buttonAreaTop} >
                {
                    challengeStarted ? 
                    <>
                        <button 
                        onClick={() => { }}
                        type="submit"
                        >download zip file {dockerFileLocation}
                        </button>
                        <button 
                            onClick={() => { }}
                            type="submit"
                            >Submit Solution
                        </button>
                    </>
                    :
                    <>
                        <button 
                        onClick={() => { startChallenge(challenge) }}
                        type="submit"
                        >Start Challenge !
                        </button>
                    </>
                }

            </div>
            <div className={styles.buttonAreaBottom} >
                <button 
                    onClick={() => { }}
                    type="submit"
                    >View Submissions 
                </button>
                <button 
                    onClick={() => { disableChallenge(challenge.id)}}
                    type="submit"
                    >Disable Challenge
                </button>
            </div>
        </div>
        </>
    )
}

export default ChallengeButtonArea