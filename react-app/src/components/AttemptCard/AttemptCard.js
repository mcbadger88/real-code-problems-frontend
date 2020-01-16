import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './AttemptCard.module.css'

class AttemptCard extends React.Component{
    //Inherits props from the ViewMyAttempts page.
    constructor(props){
        super(props)
    }

    // Returns true if results are available for an attempt, returns false if no results are available for an attempt. Used to conditionally render the 'view my results' button on the attempt card.
    resultsAvailable(){
        if(this.props.status === "PASSED" || this.props.status ==="FAILED"){
            console.log(this.props)

            return true
        }else{
            return false
        }
    }

    render(){
        //formatting submission date
        let submissionDate = new Date(this.props.dateSubmitted)
        let formattedDate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(submissionDate)

        return(
            <tr className={styles.cardContainer}>

                <td className={styles.tableData} id={styles.leftRoundedEdges}> 
                    <a href={`${process.env.REACT_APP_FRONTEND_BASE_URL}/challenges/${this.props.challengeID}`} className={styles.linksEmphasis}>
                        {this.props.challenge}
                    </a>
                </td>

                <td className={styles.tableData} > 

                    <a className={styles.links} href={`${process.env.REACT_APP_FRONTEND_BASE_URL}/candidates/${this.props.candidate}`} > {`@${this.props.username}`}</a>
                
                </td>

                <td className={styles.tableData}>
                    {this.props.status}
                </td>

                <td className={styles.tableData}> 
                    {formattedDate} 
                </td>

                <td className={styles.tableData} id={styles.rightRoundedEdges}> 
                {/* need clarification on route to delete attempt. */}
                    <div className={styles.buttonDiv}>
                        <a className={styles.button} href="">delete</a>
                        {this.resultsAvailable() ? <a className={styles.button} href={`/results/${this.props.attemptID}`}>view results</a> : null}
                    </div>
                </td>
            </tr>
        );
    }
}

export default AttemptCard;