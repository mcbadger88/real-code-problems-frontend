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
            <tr className={styles.cardContainer}>

                <td className={styles.tableData} id={styles.leftRoundedEdges}> 
                    <div className={styles.bolded}>
                        {this.props.challenge}
                    </div>
                </td>

                <td className={styles.tableData} > 

                    <a href={`${process.env.REACT_APP_FRONTEND_BASE_URL}/candidates/${this.props.candidate}`} > view profile</a>
                
                </td>

                <td className={styles.tableData}>
                    {this.props.status}
                </td>

                <td className={styles.tableData}> 
                    {formattedDate} 
                </td>

                <td className={styles.tableData} id={styles.rightRoundedEdges}> 
                    <button>Edit</button> 
                    <button>delete</button>
                </td>
            </tr>
        );
    }
}

export default AttemptCard;