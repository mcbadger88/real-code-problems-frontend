import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './AttemptCard.module.css'

class AttemptCard extends React.Component{
    //Inherits props from the ViewMyAttempts page.
    constructor(props){
        super(props)
    }

    render(){
        //formatting submission date
        let submissionDate = new Date(this.props.dateSubmitted)
        let formattedDate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(submissionDate)

        return(
            <tr>
                <td> {this.props.challenge} </td>
                <td> {this.props.status} </td>
                <td> {formattedDate} </td>
                <td> 
                    <button>Edit</button> 
                    <button>delete</button>
                </td>
            </tr>
        );
    }
}

export default AttemptCard;