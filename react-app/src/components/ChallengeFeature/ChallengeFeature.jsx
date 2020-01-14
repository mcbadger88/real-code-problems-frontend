import React, { useState, useEffect } from 'react';
import styles from './ChallengeFeature.module.css';

const ChallengeFeature = ({feature, totalFeatures}) => {
    return (
        <div className={styles.featureContainer}>
            <h2>Feature {feature.number}/{totalFeatures}: {feature.title}</h2>
            {feature.scenarios && feature.scenarios.map((scenario) =>                 
            <div className={styles.scenarioContainer}>
                <h3>Scenario : {scenario.scenarioTitle}</h3>
                {scenario.lineNumbers[0] &&
                <>
                    <h4>Test Line {scenario.lineNumbers[0].lineNumber} {scenario.lineNumbers[0] && scenario.lineNumbers[0].testString}</h4>
                    <img className={styles.helperImage} src={scenario.lineNumbers[0] && scenario.lineNumbers[0].helperImage}></img>
                    </>
                }
            </div>
            )}
        </div>
    )
}

export default ChallengeFeature


