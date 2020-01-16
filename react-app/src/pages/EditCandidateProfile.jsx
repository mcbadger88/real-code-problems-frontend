import React from 'react';
import EditCandidateProfileForm from '../components/EditCandidateProfileForm/EditCandidateProfileForm'
import NavBar from '../components/NavBar/NavBar'
const EditCandidateProfile = (props) => {

    return(
        <div>
        <NavBar />
        <EditCandidateProfileForm {...props} />
        </div>
    )

}

export default EditCandidateProfile






