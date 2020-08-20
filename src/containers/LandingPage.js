import React from 'react'
import {NavLink} from 'react-router-dom'
import ShowCard from '../components/ShowCard'
import showpage1 from '../images/showpage1.jpg'
import showpage2 from '../images/showpage2.jpg'
import showpage3 from '../images/showpage3.jpg'
import showpage4 from '../images/showpage4.jpg'
import NavBar from '../components/NavBar'
import "../style/LandingPage.css"

class LandingPage extends React.Component {

    render() {
        const landingPagePhotos = [showpage1, showpage2, showpage3, showpage4];
        return (
            <div>
                <div className="landing-header">
                    <h1 id="landing-company-name">Scorched Wood Flag Company</h1>
                    <div className='nav-holder'><NavBar/></div>
                </div>
                <div className="section-image-left">
                        <img className='img-holder' src={landingPagePhotos[0]} alt='flag filler'/>  
                    <div className='single-nav-holder'>
                        <h2 id='flag-link-descript'>Handcrafted Wooden Flags for All</h2>
                        <NavLink className='flags-link'
                            to='/flags'
                            exact><button className='view-flags-button'>View Flags</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage