import React from 'react'
import '../style/FlagsPage.css'
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
        return (
            <div>
                <NavBar />
            <div className='all-flags-holder'>

                <div className="flag-1">
                    <img src={display1} className='flag-page-photos' alt='AmericanFlag'></img>
                </div>

                <div className="flag-2">
                    <img src={display2} className='flag-page-photos' alt='BlackBeatenFlag'></img>
                </div>

                <div className="flag-3">
                    <img src={display3} className='flag-page-photos' alt='PunisherFlag'></img>
                </div>

                <div className="flag-4">
                    <img src={display4} className='flag-page-photos' alt='ThinBlueFlag'></img>
                </div>

                <div className="flag-5">
                    <img src={display5} className='flag-page-photos' alt='USAFFlag'></img>
                </div>

                <div className="flag-6">
                    <img src={display6} className='flag-page-photos' alt='BeatenAmericanFlag'></img>
                </div>

                <div className="flag-7">
                    <img src={display7} className='flag-page-photos' alt='NavyFlag'></img>
                </div>

                <div className="flag-8">
                    <img src={display8} className='flag-page-photos' alt='SnekFlag'></img>
                </div>

                <div className="flag-9">
                    <img src={display9} className='flag-page-photos' alt='ThinRedFlag'></img>
                </div>

            </div>
            </div>
        )
    }
}

export default FlagsPage