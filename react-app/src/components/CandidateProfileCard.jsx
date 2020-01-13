import React,{useEffect} from 'react'





const CandidateProfileCard = ({foundCandidateProfile, history, ...rest}) => {

    const handleClick = () => {
        console.log(history)
        history.push('candidates/{}/edit')
    }




    useEffect (
        () => {console.log({...rest}, 'what is the rest from candidate card')}
        
        ,[])
    

   return(
       
    <div>
            <p>First Name: {foundCandidateProfile.firstname}</p>   
            <p>Last Name: {foundCandidateProfile.lastname}</p>
            <p>UserID(To be hidden maybe): {foundCandidateProfile.user_id}</p>   
            <p>CandidateID(To be hidden maybe): {foundCandidateProfile._id}</p>   
            <p>Bio: {foundCandidateProfile.bio}</p>   
            <p>Github Account: {foundCandidateProfile.github}</p>
            <p>User Name (in our mongodb?): {foundCandidateProfile.username}</p>
        <button onClick={handleClick}>Edit</button> 
    </div>
    )
}


export default CandidateProfileCard