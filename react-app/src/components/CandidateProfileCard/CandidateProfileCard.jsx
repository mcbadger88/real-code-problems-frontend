import React from 'react'
import {Redirect} from 'react-router-dom'
import styles from '../CandidateProfileCard/CandidateProfileCard.module.css'

const CandidateProfileCard = ({foundCandidateProfile, history, ...rest}) => {

    const handleClick = () => {
        history.push(`/candidates/${foundCandidateProfile._id}/edit`)
        // 'localhost:3000'
    }

    console.log(foundCandidateProfile);

   return(
    <>   
    <div className={styles.ContentContainer}>
        <div className={styles.ProfileInfoContainer}>
            <p>First Name: {foundCandidateProfile.firstname}</p>   
            <p>Last Name: {foundCandidateProfile.lastname}</p>
             
            <p>Github Account: {foundCandidateProfile.github}</p>
            <p>Linkedin:{foundCandidateProfile.linkedin}</p>
            <p>Bio: {foundCandidateProfile.bio}</p>  
        </div>    
        
        <div className={styles.PhotoArea}>
            <img className={styles.GitPhoto}src={foundCandidateProfile.image} />
        </div>
            {/* <p>User Name (in our mongodb?): {foundCandidateProfile.username}</p> */}
            {/* <p>UserID(To be hidden maybe): {foundCandidateProfile.user_id}</p>    */}
            {/* <p>CandidateID(To be hidden maybe): {foundCandidateProfile._id}</p>    */}
    </div>

    <button className={styles.UpdateButton} onClick={handleClick}>Edit</button> 
    </>
    )
}


export default CandidateProfileCard