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
                <div className="all-details">
                    <div className="size-details">
                        <h1 className="size-details-header">Size Details</h1>
                            <h3>Small: *Dimensions*</h3>
                            <h3>Medium: *Dimensions*</h3>
                            <h3>Large: *Dimensions*</h3>
                    </div>
                    <div className='price-details'>
                        <h1 className="price-details-header">Price Details</h1>
                            <h3>Small: $</h3>
                            <h3>Medium: $$</h3>
                            <h3>Large: $$$</h3>
                            <h4>*For "Beaten" style flags, additional $10 fee applies*</h4>
                    </div>
                </div>
            <div className='all-flags-holder'>

                <div className="flag-1">
                    <img src={display1} className='flag-page-photos' alt='Black Beaten Flag'></img>
                    <p className="flag-photo-description">Beaten Black American Flag</p>
                </div>

                <div className="flag-2">
                    <img src={display2} className='flag-page-photos' alt='American Flag'></img>
                    <p className="flag-photo-description">American Flag</p>
                </div>

                <div className="flag-3">
                    <img src={display3} className='flag-page-photos' alt='Thin Blue Line Flag'></img>
                    <p className="flag-photo-description">Thin Blue Line American Flag</p>
                </div>

                <div className="flag-4">
                    <img src={display4} className='flag-page-photos' alt='Skull Flag'></img>
                    <p className="flag-photo-description">Skull American Flag</p>
                </div>

                <div className="flag-5">
                    <img src={display5} className='flag-page-photos' alt='Beaten American Flag'></img>
                    <p className="flag-photo-description">Beaten American Flag</p>
                </div>

                <div className="flag-6">
                    <img src={display6} className='flag-page-photos' alt='USAF Flag'></img>
                    <p className="flag-photo-description">USAF Flag</p>
                </div>

                <div className="flag-7">
                    <img src={display7} className='flag-page-photos' alt='Snek Flag'></img>
                    <p className="flag-photo-description">Don't Tred On Me Flag</p>
                </div>

                <div className="flag-8">
                    <img src={display8} className='flag-page-photos' alt='Navy Flag'></img>
                    <p className="flag-photo-description">United States Navy American Flag</p>
                </div>

                <div className="flag-9">
                    <img src={display9} className='flag-page-photos' alt='Thin Red Line Flag'></img>
                    <p className="flag-photo-description">Thin Red Line American Flag</p>
                </div>

            </div>
            </div>
        )
    }
}

export default FlagsPage