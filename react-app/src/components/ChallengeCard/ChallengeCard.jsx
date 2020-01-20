import React, {Component} from 'react'
import styles from '../ChallengeCard/ChallengeCardStyles.module.css'
import {NavLink} from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const ChallengeCard = (props) => {
     console.log(props.data);
   
    return (
        <div className={styles.ChallengeCard}>
                <h2>{props.data.title}</h2>
                <div>{props.data.description}</div>
                <div>{props.data.active}</div>
            <div className={styles.miniIconsContainer}>
                <p className={styles.IconArea}>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </p>
                <p className={styles.IconArea}>|</p>
                <p className={styles.IconArea}>
                    <FontAwesomeIcon icon={faBuilding}/>
                    Fresho
                </p>
            </div>
            <NavLink className={styles.buttonLink} to={`challenges/${props.data._id}`}>More details</NavLink>

        </div>
    )
}

export default ChallengeCard
