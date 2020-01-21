import React from 'react';
import EditCandidateProfileForm from '../components/EditCandidateProfileForm/EditCandidateProfileForm'
import NavBar from '../components/NavBar/NavBar'
import styles from './EditCandidateProfile.module.css'


const EditCandidateProfile = (props) => {

    return(
        <div>
        <NavBar />
        <h1 className={styles.PageTitle}>Edit your information</h1>
        <EditCandidateProfileForm {...props} />
        </div>
    )

}

export default EditCandidateProfile






