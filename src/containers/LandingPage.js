import React from 'react'
import {NavLink} from 'react-router-dom'
import FlagDisplay from '../components/FlagDisplay'
import showpage1 from '../images/showpage1.jpg'
import NavBar from '../components/NavBar'
import MyCalendar from '../containers/MyCalendar'
import CustomFormHolder from './CustomFormHolder'
import "../style/LandingPage.css"

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <div className="landing-header">
                    <h1 id="landing-company-name">Scorched Wood Flag Company</h1>
                    <div className='nav-holder'><NavBar/></div>
                </div>
                <div className="section-image-left">
                        <img className='img-holder' src={showpage1} alt='flag filler'/>  
                    <div className='single-nav-holder'>
                        <h2 id='flag-link-descript'>Handcrafted Wooden Flags for All</h2>
                        <NavLink className='flags-link'
                            to='/flags'
                            exact><button className='view-flags-button'>View Flags</button>
                        </NavLink>
                    </div>
                </div>
                <div className='flag-display-holder'>
                    <FlagDisplay />
                </div> 
                <CustomFormHolder />
                <div className = 'calendar'>
                    <MyCalendar />
                </div>
            </div>
        )
    }
}

export default LandingPage