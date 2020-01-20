import React from 'react';
import styles from './BrowseChallenges.module.css'
import NavBar from '../components/NavBar/NavBar'
import AvailableChallenges from '../components/AvailableChallenges/AvailableChallenges'

const BrowseChallenges = ({user}) => {
    return (
        <>
        <NavBar user={user}/>
        <h1 className={styles.PageTitle}>Welcome !</h1>
        <div>
            <h2 className={styles.CardTitle}>Featured challenges</h2>
            <AvailableChallenges />
        </div>

        <div>
            <h2 className={styles.CardTitle}>View all</h2>
            <AvailableChallenges />
        </div>
        </>
    )
}

export default BrowseChallenges