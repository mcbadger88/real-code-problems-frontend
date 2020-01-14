import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { candidates } from '../../api/candidate';

const EditCandidateProfileForm = (props) => {

    const [candidateProfile, setCandidateProfile] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({...candidateProfile})
        
        let response = await axios.put(`http://localhost:5000/candidates/${props.user._id}`, {...candidateProfile},{
            withCredentials: true
          })
        
        console.log(response)
        props.history.push('/profilecreated')
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

    console.log('rendered')

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
            <input onChange={handleInputChange} type="text" name="bio" vaule={candidateProfile.bio} placeholder={`${candidateProfile.username}`}/>
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