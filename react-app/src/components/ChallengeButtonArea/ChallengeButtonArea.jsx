import React, { useState, useEffect } from 'react';
import styles from './ChallengeButtonArea.module.css';
import {apiCreateAttempt, apiSubmitAttempt} from '../../api/attempt'
import {apiSetChallengeEnabled} from '../../api/challenge'
import { Link } from 'react-router-dom';

const ChallengeButtonArea = ({challenge, attemptStatus, onChallengeStatusChange}) => {
    const [dockerFileLocation, setDockerFileLocation] = useState(null)
    
    //call set dockerfile variable
    useEffect( async () => {
        setDockerFileLocation(challenge.zipFileLocation)
    }, [])

    //create attempt in response to start challenge button
    const startChallenge = async (challenge) => {
        //create apttempt
        const success = await apiCreateAttempt(challenge._id)
        //set challenge started
        onChallengeStatusChange()
        // const started = await apiIsActiveAttempt(challenge._id)
        // setChallengeStarted(!started)
    }

    // in response to disable challenge, create disableChallene() and call the challenge update route
    const setChallengeEnabled = async (enabled) => {
        const sucess = await apiSetChallengeEnabled(challenge.id, enabled)
        onChallengeStatusChange()
    }

    console.log(`attempt status ${attemptStatus}`)

    return (
        <>
        <div className={styles.buttonArea}> 
            <div className={styles.buttonAreaTop} >
                {
                    attemptStatus === "STARTED" ? 
                    <>
                        <button 
                        onClick={() => { }}
                        type="submit"
                        >download zip file {dockerFileLocation}
                        </button>
                        <button 
                            onClick={() => { apiSubmitAttempt()}}
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
                <Link
                    className={styles.link}
                    to={`challenges/${challenge.id}/attempts/`}
                >   
                    <button 
                        onClick={() => { }}
                        type="submit"
                        >View Submissions 
                    </button>
                </Link>
                <button 
                    onClick={() => { setChallengeEnabled(!challenge.active)}}
                    type="submit"
                    >(admin) {challenge.active ? "Disable" : "Enable"} Challenge
                </button>
            </div>
        </div>
        </>
    )
}

export default ChallengeButtonArea