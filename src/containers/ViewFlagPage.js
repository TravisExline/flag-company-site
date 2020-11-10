import React from 'react'
import NavBar from '../components/NavBar'
import display1 from '../images/display1.jpg'
import SizeOptionsDrop from '../components/SizeOptionsDrop'
import '../style/ViewFlagPage.css'
import WhyBuy from './WhyBuy'
import FlagDisplay from '../components/FlagDisplay'
import CustomFormHolder from './CustomFormHolder'
import MyCalendar from './MyCalendar'
import { connect } from 'react-redux'
import BottomNav from '../components/BottomNav'

class ViewFlagPage extends React.Component {
    render() {
        debugger
        return(
            <div>
                <NavBar />
                <div className='flex-holder'>
                    <img className='flag-img' alt="flag" src={this.props.location.state.flagImg}></img>
                    <div className='description-holder'>
                        <h1 className='view-name'>{this.props.location.state.flagName}</h1>
                        <h2 className='flag-flavor'>The {this.props.location.state.flagName}, handcrafted on real, American wood.</h2>
                        <div className='drop-down-holder'>
                            <SizeOptionsDrop smallPrice={this.props.location.state.smPrice} medPrice={this.props.location.state.medPrice} lrgPrice={this.props.location.state.lrgPrice}/>
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
                <BottomNav />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {flags: state.flagsReducer}
}

export default connect(mapStateToProps) (ViewFlagPage)