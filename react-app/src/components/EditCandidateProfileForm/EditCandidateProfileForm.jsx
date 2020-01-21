import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styles from '../EditCandidateProfileForm/EditCandidateProfileForm.module.css'

const EditCandidateProfileForm = (props) => {

    const [candidateProfile, setCandidateProfile] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/candidates/${props.match.params.id}`, {...candidateProfile},{
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

            let response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/candidates/${props.match.params.id}`)
            const {data} = response
            console.log(data)
            setCandidateProfile(data)
            
        }
        getCandidateProfile()
        
    }, [])

    console.log('rendered', props)

    return(
    <div>
    <form className={styles.EditForm} onSubmit={handleSubmit}>
        <label>
            First Name
            <input onChange={handleInputChange} type="text" name="firstname" value={candidateProfile.firstname} placeholder="First Name" required/>
        </label>
        

        <label>
            Last Name
            <input onChange={handleInputChange} type="text" name="lastname" value={candidateProfile.lastname} placeholder="Last Name" required/>
        </label>
        

        <label>
            Git Hub
            <input type="text" name="github" value={candidateProfile.github} required/>
        </label>

        <label>
            Username:
            <input type="text" name="username" value={candidateProfile.username} required/>
        </label>

        <label>
            Bio:
            <textarea onChange={handleInputChange} type="text" name="bio" vaule={candidateProfile.bio} placeholder={`${candidateProfile.bio}`}/>
        </label>

        <button className={styles.UpdateButton}type="submit">Update</button>
    </form>

    </div>
    )
}


export default EditCandidateProfileForm