import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './AttemptTableHeadings.module.css'

const AttemptTableHeadings = () => {

    return(
        <tr>
            <th>Challenge</th>
            <th>Status</th>
            <th>Date Submitted</th>
            <th>Actions</th>
        </tr>
    );
}

export default AttemptTableHeadings;