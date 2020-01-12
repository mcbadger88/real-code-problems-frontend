import React from 'react';
import CandidateProfileNewForm from '../components/CandidateProfileNewForm/CandidateProfileNewForm'

const CandidateProfileNew = (props) => {
    console.log(props.match.params)
    return(
        <div>
        <h1>This is the page we use to create new candidate</h1>
        <CandidateProfileNewForm {...props} />
        </div>
    )

}

export default CandidateProfileNew






