import React, {Component} from 'react'
import styles from '../ChallengeCard/ChallengeCardStyles.module.css'
import {NavLink} from 'react-router-dom'

 const ChallengeCard = ({challengeDetail}) => {
    //  console.log(props.data);
    return (
        <div className={styles.ChallengeCard}>
            <h2>Title: {challengeDetail.title}</h2>
            <p>Description: {challengeDetail.description}</p>
            <p>Status: {challengeDetail.active}</p>
            <p>Star:</p>
            <NavLink className='NavLink' to={`challenges/${challengeDetail.id}`}>More details</NavLink>
        </div>
    )
}

export default ChallengeCard
