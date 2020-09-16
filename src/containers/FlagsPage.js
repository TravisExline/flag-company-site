import React from 'react'
import '../style/FlagsPage.css'
import FlagCard from '../components/FlagCard'
import NavBar from '../components/NavBar'
import { fetchFlags } from '../actions/flagActions'
import { connect } from 'react-redux'
import CustomFormHolder from './CustomFormHolder'
import MyCalendar from './MyCalendar'

class FlagsPage extends React.Component {

    componentDidMount() {
        this.props.fetchFlags()
    }

    render() {
        return(
            <div>
                <div className="landing-header">
                    <h1 id="landing-company-name">Scorched Wood Flag Company</h1>
                    <div className='nav-holder'><NavBar/></div>
                </div>
                <div className='all-flags-holder'>
                    {this.props.flagDisplay.flags.map((flag) => (
                        <FlagCard flag={flag.photo} name={flag.name} smallPrice={flag.smallPrice} medPrice={flag.medPrice} lrgPrice={flag.lrgPrice}/>
                    ))}
                </div>
                <CustomFormHolder />
                <MyCalendar />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {flagDisplay: state.flagsReducer, newFlag: state.testFlagReducer}
}

export default connect(mapStateToProps, { fetchFlags })(FlagsPage)