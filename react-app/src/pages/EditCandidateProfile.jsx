import React from 'react';
import EditCandidateProfileForm from '../components/EditCandidateProfileForm/EditCandidateProfileForm'

const EditCandidateProfile = (props) => {

    return(
        <div>
        <h1>This is the page we use to edit new candidate</h1>
        <EditCandidateProfileForm {...props} />
        </div>
    )

}

export default EditCandidateProfile






