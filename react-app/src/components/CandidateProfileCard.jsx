import React from 'react'


const CandidateProfileCard = ({foundCandidate, ...rest}) => {
    
   return(
       
    <div>
        <p>Name: {foundCandidate.firstName} {foundCandidate.lastName}</p>   
        <p>UserID: {foundCandidate.user_id}</p>   
        <p>CandidateID: {foundCandidate.candidate_id}</p>   
        <p>Bio: {foundCandidate.bio}</p>   
        <button>Edit</button> 
    </div>
    )
}


export default CandidateProfileCard