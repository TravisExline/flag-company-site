import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/NavBar.css'

const NavBar = () => 
    <div className='nav-container'>
        <NavLink className='landing-link'
            to='/'
            exact>Home
        </NavLink>
        <NavLink className='flags-link'
            to='/flags'
            exact>Flags
        </NavLink>
    </div>

export default NavBar