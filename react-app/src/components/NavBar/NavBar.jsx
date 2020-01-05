import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../NavBar/NavBarStyles.module.css'
import logo from '../../assets/SiteLogo.svg'

const NavBar = () => {

    return(
        <nav className={styles.NavBar}>
            <div className={styles.LogoSection}>
                <img src={logo} className={styles.Logo} alt="logo" />
                <h2 className={styles.LogoText}>datical</h2>
                <span className={styles.TagLine}>Learn code and get practical</span>
            </div>
            <ul className='links'>

                <li><NavLink class={styles.NavLink} to={"/candidates/:id/attempts"}>View my submissions</NavLink></li>
                <li><NavLink class={styles.NavLink} to={"/challenges"}>Browse challenges</NavLink></li>
                {console.log(process.env.REACT_APP_BACKEND_BASE_URL)}
                <li><NavLink class={styles.NavLink} to={"/candidates/:id"}>Profile</NavLink></li>
                <li><NavLink class={styles.NavLink} to={"/signup"}>Sign In</NavLink></li>
                <li ><a class={styles.NavLink} href={`${process.env.REACT_APP_BACKEND_BASE_URL}/user/logout`}> Sign Out</a> </li>       

            </ul>
        </nav>
    )

}

export default NavBar;