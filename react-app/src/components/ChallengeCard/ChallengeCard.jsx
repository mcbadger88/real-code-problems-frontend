import React, {Component} from 'react'
import styles from '../ChallengeCard/ChallengeCardStyles.module.css'
import {NavLink} from 'react-router-dom'

 const ChallengeCard = (props) => {
    //  console.log(props.data);
   
    return (
        <div className={styles.ChallengeCard}>
            <h2>Title: {props.data.title}</h2>
            <p>Description: {props.data.description}</p>
            <p>Status: {props.data.active}</p>
            <p>Star:</p>
            <NavLink className='NavLink' to={`challenges/${props.data.id}`}>More details</NavLink>
        </div>
    )
}

export default ChallengeCard
