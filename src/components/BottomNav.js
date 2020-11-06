import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/BottomNav.css'

const BottomNav = () => 
    <div className='bottom-nav-holder'>
        <NavLink className='bottom-flags-link'
            to='/flags'
            exact>Products
        </NavLink>
        <NavLink className='bottom-about-link'
            to='/about'
            exact>About
        </NavLink>
        <NavLink className='bottom-custom-link'
            to='/custom'
            exact>Request Custom Flag
        </NavLink>
    </div>

export default BottomNav