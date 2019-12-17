import React, {Component} from 'react'
import axios from 'axios'


const challengesArr = [
    {
        title: "Blog Challenge",
        description: "Make a blog post",
        zipFileLocation: "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
        active: true,
        // features: [allFeatures[0]._id, allFeatures[1]._id]
    }
]

class AvailableChallenges extends Component {

    state = {
        challenges:null
    }

    componentDidMount () {

        this.setState({challenges:challengesArr})
        // const {data} = axios.get('http://localhost:5000/challenges');
        console.log(this.state.challenges);
        console.log('mounted');
    }


    render() {
        return( <h2>Available Challenges</h2> )
    }
}

export default AvailableChallenges