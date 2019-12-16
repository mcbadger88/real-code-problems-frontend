import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../NavBar/NavBarStyles.module.css'
import logo from '../../assets/SiteLogo.svg'

const NavBar = () => {

    return(
        <nav className={styles.NavBar}>
            <div class={styles.LogoSection}>
                <img src={logo} class={styles.Logo} alt="logo" />
                <h2 class={styles.LogoText}>datical</h2>
                <span class={styles.TagLine}>Learn code and get practical</span>
            </div>
            <ul className='links'>
                <li><NavLink class={styles.NavLink} to={"/candidates/:id/attempts"}>View my submissions</NavLink></li>
                <li><NavLink class={styles.NavLink} to={"/challenges"}>Browse challenges</NavLink></li>
                <li><NavLink class={styles.NavLink} to={"/candidates/:id"}>Profile</NavLink></li>
                <li><NavLink class={styles.NavLink} to={"/signup"}>Sign In</NavLink></li>
                <li><NavLink class={styles.NavLink} to={"/signup"}>Sign Out</NavLink></li>       
            </ul>
        </nav>
    )

}

export default NavBar;