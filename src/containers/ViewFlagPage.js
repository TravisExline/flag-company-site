import React from 'react'
import NavBar from '../components/NavBar'
import display1 from '../images/display1.jpg'
import SizeOptionsDrop from '../components/SizeOptionsDrop'
import '../style/ViewFlagPage.css'
import WhyBuy from './WhyBuy'
import FlagDisplay from '../components/FlagDisplay'
import CustomFormHolder from './CustomFormHolder'
import MyCalendar from './MyCalendar'

class ViewFlagPage extends React.Component {
    render() {
        return(
            <div>
                <div className="landing-header">
                    <h1 id="landing-company-name">Scorched Wood Flag Company</h1>
                    <div className='nav-holder'><NavBar/></div>
                </div>
                <div className='flex-holder'>
                    <img className='flag-img' src={display1}></img>
                    <div className='description-holder'>
                        <h1 className='view-name'>American Flag</h1>
                        <h2 className='flag-flavor'>The Traditional American Flag, handcrafted on real, American wood.</h2>
                        <div className='drop-down-holder'>
                            <SizeOptionsDrop />
                        </div>
                        <h3 className='description-flavor-head'>
                            + DESCRIPTION
                        </h3>
                        <p className='description-flavor'>
                            Made one at a time in out workshop, this tried and true homage to tradition creates a fine addition to your space
                        </p>
                        <h3 className='return-flavor-head'>
                            + RETURNS
                        </h3>
                        <p className='return-flavor'>
                            Made one at a time in out workshop, this tried and true homage to tradition creates a fine addition to your space
                        </p>
                    </div>
                </div>
                <WhyBuy />
                <FlagDisplay />
                <CustomFormHolder />
                <MyCalendar />
            </div>
        )
    }
}

export default ViewFlagPage