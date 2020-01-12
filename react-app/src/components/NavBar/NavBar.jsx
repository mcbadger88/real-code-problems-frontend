import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../NavBar/NavBarStyles.module.css'
import logo from '../../assets/SiteLogo.svg'
import auth from '../../api/auth'

const NavBar = (props) => {
    console.log(props, 'from nav');
    return(
        <nav className={styles.NavBar}>
            <div className={styles.LogoSection}>
                <img src={logo} className={styles.Logo} alt="logo" />
                <h2 className={styles.LogoText}>datical</h2>
                <span className={styles.TagLine}>Learn code and get practical</span>
            </div>
            <ul className='links'>

                <li><NavLink className={styles.NavLink} to={"/candidates/:id/attempts"}>View my submissions</NavLink></li>
                <li><NavLink className={styles.NavLink} to={"/challenges"}>Browse challenges</NavLink></li>
                <li><NavLink className={styles.NavLink} to={`/candidates/${props.userID}`}>Profile</NavLink></li>
                {/* the above nav links to shall be dynamically generated after we get the user id from the top level */}
                <li><NavLink className={styles.NavLink} to={"/signup"}>Sign In</NavLink></li>
                <li ><NavLink className={styles.NavLink} to={"/"} onClick={() => auth.logout()}> Sign Out</NavLink></li>       

            </ul>
        </nav>
    )

}

export default NavBar;