import React from 'react';
import {NavLink} from 'react-router-dom';
import '../NavBar/NavBar.css'

const NavBar = () => {

    return(
        <nav className='NavBar'>
            <ul className='Links'>
                <li><NavLink class='nav-links' to={"/candidates/:id/attempts"}>View my submissions</NavLink></li>
                <li><NavLink class='nav-links' to={"/challenges"}>Browse challenges</NavLink></li>
                <li><NavLink class='nav-links'to={"/candidates/:id"}>Profile</NavLink></li>
                <li><NavLink class='nav-links' to={"/signup"}>Sign In</NavLink></li>
                <li><NavLink class='nav-links' to={"/signup"}>Sign Out</NavLink></li>
                
            </ul>
        </nav>
    )

}

export default NavBar;