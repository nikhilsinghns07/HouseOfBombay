import React from 'react'
import classes from './style.module.css'
//import {GiWrappedHeart} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <React.Fragment>
            <p className={classes.top}>OUR SECOND BOOK IS AVAILABLE FOR ORDER AT JUST 749 INR</p>    
                <div >
                    <ul className={classes.items}>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>BLOG</li>
                        <li>COLLABORATE</li>
                        <img src={require('../img/logo.png')}></img>
                        
                    </ul>
                </div>
            
        </React.Fragment>
    )
}

export default Header
