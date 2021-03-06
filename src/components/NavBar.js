import React from 'react'
import {NavLink} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../style/NavBar.css'

const NavBar = () => 
    <div className='landing-header'>
        <h1 id='landing-company-name'>Scorched Wood Flag Company</h1>
        <div className='nav-container'>
            <NavLink className='landing-link'
                to='/'
                exact>Home
            </NavLink>
            <NavLink className='flags-link'
                to='/flags'
                exact>Wooden Flags
            </NavLink>
            <NavLink className='about-link'
                to='/about'
                exact>About
            </NavLink>
            {/* <NavLink className='contact-link'
                to='/contact'
                exact>Contact
            </NavLink> */}
            {/* <NavLink className='cart-link'
                to='/contact'
                exact><FontAwesomeIcon icon={faShoppingCart}/>
            </NavLink> */}
        </div>
    </div>

export default NavBar