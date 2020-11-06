import React from 'react'
import '../style/FlagsPage.css'
import FlagCard from '../components/FlagCard'
import NavBar from '../components/NavBar'
import { fetchFlags } from '../actions/flagActions'
import { connect } from 'react-redux'
import CustomFormHolder from './CustomFormHolder'
import WhyBuy from './WhyBuy'
import MyCalendar from './MyCalendar'
import BottomNav from '../components/BottomNav'

class FlagsPage extends React.Component {

    componentDidMount() {
        this.props.fetchFlags()
        // debugger
    }

    render() {
        return(
            <div>
                <NavBar />
                <div className='all-flags-holder'>
                    {this.props.flagDisplay.flags.map((flag) => (
                        <FlagCard id={flag.id} flag={flag.photo} name={flag.name} smallPrice={flag.smallPrice} medPrice={flag.medPrice} lrgPrice={flag.lrgPrice}/>
                    ))}
                </div>
                <WhyBuy />
                <CustomFormHolder />
                <MyCalendar />
                <BottomNav />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {flagDisplay: state.flagsReducer, newFlag: state.testFlagReducer}
}

export default connect(mapStateToProps, { fetchFlags })(FlagsPage)