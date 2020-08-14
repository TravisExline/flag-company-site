import React from 'react'
import '../style/FlagsPage.css'
import FlagCard from '../components/FlagCard'
import NavBar from '../components/NavBar'
import { fetchFlags } from '../actions/flagActions'
import { connect } from 'react-redux'

class FlagsPage extends React.Component {

    componentDidMount() {
        this.props.fetchFlags()
    }

    render() {
        return (
            <div>
                <NavBar />
            <div className="order">
                <h2>To Order, Please Email Us With Your Desired Size and Design</h2>
            </div>
            <div className='all-flags-holder'>
                {this.props.flagDisplay.flags.map((flag) => (
                    <FlagCard flag={flag.photo} name={flag.name} smallPrice={flag.smallPrice} medPrice={flag.medPrice} lrgPrice={flag.lrgPrice}/>
                ))}
                {this.props.newFlag.map((flag) => (
                    <p>{flag.name}{flag.id}</p>
                ))
                }
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {flagDisplay: state.flagsReducer, newFlag: state.testFlagReducer}
}

export default connect(mapStateToProps, { fetchFlags })(FlagsPage)