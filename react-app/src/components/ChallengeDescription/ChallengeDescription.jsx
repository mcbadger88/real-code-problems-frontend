import React, { useState, useEffect } from 'react';
import styles from './ChallengeDescription.module.css';

const ChallengeDescription = ({challenge}) => {

    return (
        <div className={styles.challengeDescription}>
            <h1>{challenge ? challenge.title : null }</h1>
            <h3>Stars: {challenge && challenge.features ? challenge.features.length : null}</h3>
            <h4>Status: {challenge && challenge.active ? "Active" : "Inactive"}</h4>
            <p>{challenge ? challenge.description : null}</p>
        </div>
    )
}

export default ChallengeDescription