import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import { getMyAttempts } from '../api/attempt';
import AttemptCard from '../components/AttemptCard/AttemptCard' 
import styles from './MyChallengeSubmissions.module.css'
import AttemptTableHeadings from '../components/AttemptTableHeadings/AttemptTableHeadings';


const MyChallengeSubmissions = ({candidateID}) => {
    const [submissions, setSubmissions] = useState(null);

    // const [candidateId, setCandidateId] = useState(null);
    
    //API call goes here.
    useEffect(() => {
        const getAttempts = async() => {
            const subs = await getMyAttempts(candidateID)
            console.log(subs[0].status)
            setSubmissions(subs)

        }
        getAttempts()
    }, []);

    return (
    <>
        <NavBar />
        <div class={styles.tableContainer}>
            <h1>My Challenge Attempts</h1>

            <table>
                <AttemptTableHeadings/>
                {submissions ? submissions.map(submission =>     
                    // When submissions exist, successfully create a new table row and render an attempt card for each submission.
                        <AttemptCard status={submission.status} challenge={submission.challenge_id.title} dateSubmitted={submission.updatedAt} candidate={submission.candidate_id}/>) : <p> Loading... </p>}
            </table>
        </div>
    </>
    )
}

export default MyChallengeSubmissions