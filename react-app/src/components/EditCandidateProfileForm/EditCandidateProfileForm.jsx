import React, {useState, useEffect} from 'react';
import axios from 'axios'

const EditCandidateProfileForm = (props) => {

    const [candidateProfile, setCandidateProfile] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.put(`http://localhost:5000/candidates/${props.match.params.id}`, {...candidateProfile},{
            withCredentials: true
          })
        
        props.history.push(`/candidates/user/${props.user._id}`)
    }

    const handleInputChange = (e) => {
        e.persist();
        setCandidateProfile(candidateProfile => {return {
            ...candidateProfile, [e.target.name]:e.target.value}})
        
        console.log(candidateProfile)

        }

    useEffect(() => {
        async function getCandidateProfile () {

            let response = await axios.get(`http://localhost:5000/candidates/${props.match.params.id}`)
            const {data} = response
            console.log(data)
            setCandidateProfile(data)
            
        }
        getCandidateProfile()
        
    }, [])

    console.log('rendered', props)

    return(
    <div>
    <p>Here we put the react form to create the candidate</p>
    <form onSubmit={handleSubmit}>
        <label>
            First Name
            <input onChange={handleInputChange} type="text" name="firstname" value={candidateProfile.firstname} placeholder="First Name" required/>
        </label>
        <br />

        <label>
            Last Name
            <input onChange={handleInputChange} type="text" name="lastname" value={candidateProfile.lastname} placeholder="Last Name" required/>
        </label>
        <br />

        <label>
            Git Hub
            <input type="text" name="github" value={candidateProfile.github} required/>
        </label>
        <br />

        <label>
            Username:
            <input type="text" name="username" value={candidateProfile.username} required/>
        </label>
        <br />

        <label>
            Bio:
            <input onChange={handleInputChange} type="text" name="bio" vaule={candidateProfile.bio} placeholder={`${candidateProfile.bio}`}/>
        </label>
        <br />

        <button type="submit">Update</button>
    </form>

        <div>
            <h2>Information provided and stored in state</h2>
            {candidateProfile.firstname}
            {candidateProfile.lastname}
            {candidateProfile.bio}
        </div>

    </div>
    )
}


export default EditCandidateProfileForm