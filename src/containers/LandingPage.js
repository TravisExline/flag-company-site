import React from 'react'
import {NavLink} from 'react-router-dom'
import FlagDisplay from '../components/FlagDisplay'
import showpage1 from '../images/showpage1.jpg'
import NavBar from '../components/NavBar'
import MyCalendar from '../containers/MyCalendar'
import CustomFormHolder from './CustomFormHolder'
import BottomNav from '../components/BottomNav'
import "../style/LandingPage.css"
import Order from './Order'

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
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
                <FlagDisplay />
                <CustomFormHolder />
                <div className = 'calendar'>
                    <MyCalendar />
                </div>
                <BottomNav />
            </div>
        )
    }
}

export default LandingPage