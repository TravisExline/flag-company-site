import React from 'react'
import '../style/FlagsPage.css'
import FlagCard from '../components/FlagCard'
import SizeOptionsDrop from '../components/SizeOptionsDrop'
import NavBar from '../components/NavBar'
import display1 from '../images/display1.jpg'
import display2 from '../images/display2.jpg'
import display3 from '../images/display3.jpg'
import display4 from '../images/display4.jpg'
import display5 from '../images/display5.jpg'
import display6 from '../images/display6.jpg'
import display7 from '../images/display7.jpg'
import display8 from '../images/display8.jpg'
import display9 from '../images/display9.jpg'

class FlagsPage extends React.Component {
    render() {
        const displayFlagPhotos = [display1, display2, display3, display4, display5, display6, display7, display8, display9]
        return (
            <div>
                <NavBar />
            <div className='all-flags-holder'>
                {displayFlagPhotos.map((flag) => (
                    <FlagCard flag={flag} />
                ))}
            </div>
            </div>
        )
    }
}

export default FlagsPage