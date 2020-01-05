import React, {Component} from 'react'
import axios from 'axios'
import {getAllChallenges} from '../../api/challenge.js'
import ChallengeCard from '../ChallengeCard/ChallengeCard'

class AvailableChallenges extends Component {

    state = {
        challenges:null,
        isLoading:true
    }

    async componentDidMount () {
        const data = await getAllChallenges();
        this.setState(
            {challenges:data,
            isLoading:false}
        )
        console.log(this.state)
    }

    render() {

        const {challenges} = this.state

        let challengeList = challenges ? challenges.map((challenge) => (<ChallengeCard key={challenge.id} challengeDetail={challenge} />)):null
        
        return(

            <div>
                {this.state.isLoading ? <p>cotent loading</p> : challengeList}
            </div>
        )

    }
}

export default AvailableChallenges