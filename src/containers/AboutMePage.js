import React from 'react'
import NavBar from '../components/NavBar'

class AboutMePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1 className="about-header">Scorched Wood Flag Co.</h1>
                <p className="about-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2 className="team-heading">The Team</h2>
                <h3 className="founder-craftsman">Founder and Craftsman</h3>
                <img src='' alt="Founder and Craftsman Photo"></img>
                <p className="founder-craftsman-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        )
    }
}

export default AboutMePage