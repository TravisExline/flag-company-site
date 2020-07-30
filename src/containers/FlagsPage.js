import React from 'react'
import '../style/FlagsPage.css'
import FlagCard from '../components/FlagCard'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'

class FlagsPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
            <div className="order">
                <h2>To Order, Please Email Us With Your Desired Size and Design</h2>
            </div>
            <div className='all-flags-holder'>
                {this.props.flagDisplay.map((flag) => (
                    <FlagCard flag={flag.photo} name={flag.name} smallPrice={flag.smallPrice} medPrice={flag.medPrice} lrgPrice={flag.lrgPrice}/>
                ))}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {flagDisplay: state.flags}
}

export default connect(mapStateToProps)(FlagsPage)