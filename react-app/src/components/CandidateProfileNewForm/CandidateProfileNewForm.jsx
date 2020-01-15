import React, {useState, useEffect} from 'react';
import axios from 'axios'

const CandidateProfileNewForm = () => {

    const [inputs,setInputs] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)
        let response = await axios.post('http://localhost:5000/candidates', {...inputs,user_id:Math.random()})
        console.log(response)
    }

    const handleInputChange = (e) => {
        e.persist();
        setInputs(inputs => {return {
            ...inputs, [e.target.name]:e.target.value}})
        console.log('here')
        }
    



    // const handleFirstName = (e) => {
    //     const {value} = e.target 
    //     setFirstName(value)
    // }

    // const handleLastName = (e) => {
    //     const {value} = e.target 
    //     setLastName(value)
    // }


    // const handleBio = (e) => {
    //     const {value} = e.target 
    //     setBio(value)
    // }

    useEffect (() => {
      console.log('if firstname updated')
    }, [inputs.firstName])

    return(
    <div>
    <p>Here we put the react form to create the candidate</p>
    <form onSubmit={handleSubmit}>
        <label>
            <input onChange={handleInputChange} type="text" name="firstname" value={inputs.firstName} placeholder="First Name" required/>
        </label>
        <br />

        <label>
            <input onChange={handleInputChange} type="text" name="lastname" value={inputs.lastName} placeholder="Last Name" required/>
        </label>
        <br />

        <label>
            <input onChange={handleInputChange} type="text" name="bio" vaule={inputs.bio}placeholder="About Yourself"/>
        </label>
        <br />

        <button type="submit">Create</button>
    </form>

        <div>
            <h2>Information provided and stored in state</h2>
            {inputs.firstName}
            {inputs.lastName}
            {inputs.bio}
        </div>

    </div>
    )
}


export default CandidateProfileNewForm