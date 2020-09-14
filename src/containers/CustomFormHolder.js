import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/CustomFormHolder.css'

const CustomFormHolder = () => 
    <div className='custom-link-holder'>
        <h2 className='custom-link-header'>Have an Idea?</h2>
        <h3 className='custom-link-header-small'>Let's make it happen.</h3>
        <NavLink className='custom-link'
            to='/custom'
            exact><button className='custom-flag-btn'>Request a Custom Flag</button>
        </NavLink>
    </div>

export default CustomFormHolder

