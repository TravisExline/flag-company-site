import React from 'react'
import NavBar from '../components/NavBar'
import '../style/About.css'
import BottomNav from '../components/BottomNav'
import DevImg from '../images/0.jpg'

class AboutMePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className='about-company'>
                    <h1 className="about-header">Scorched Wood Flag Co.</h1>
                    <p className="about-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='team-holder'>
                    <h1 id='team-header'>The Team</h1>
                    <div className='founder-holder'>
                        <h2 id='founder-header'>Founder and Craftsman - Todd Exline</h2>
                        <p className="founder-craftsman-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='web-developer-holder'>
                        <h2 id='web-dev-header'>Web Developer - Travis Exline</h2>
                        <p className='web-dev-details'>Having an interest in technology and the creative process growing up, Travis graduated with a degree in Media Studies from Loras College in 2017. 
                        After working as a photographer and account manager for over a year, he transitioned back to school to study Web Development. 
                        With full stack development knowledge of languages such as Ruby on Rails, SQL, JavaScript, HTML, CSS, and other libraries, Travis brings creative and technical skill to the team.  
                        For fun, Travis spends time with his multiple reptiles, playing video games, and enjoying time with his family.</p>
                    </div>
                </div>
                <BottomNav />
            </div>
        )
    }
}

export default AboutMePage