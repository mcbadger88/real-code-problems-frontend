import React, { useState, useEffect } from 'react';
import styles from './ChallengeDescription.module.css';

const ChallengeDescription = ({challenge}) => {

    return (
        <div className={styles.challengeDescription}>
            <h2>Challenge: {challenge ? challenge.title : null }</h2>
            <h3>Stars: {challenge && challenge.features ? challenge.features.length : null}</h3>
            <h4>Challenge {challenge && challenge.active ? "Enabled" : "Disabled"}</h4>
            <p>{challenge ? challenge.description : null}</p>
        </div>
    )
}

export default ChallengeDescription