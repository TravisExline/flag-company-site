import React from 'react'
import '../style/FlagsPage.css'
import FlagCard from '../components/FlagCard'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
// import display1 from '../images/display1.jpg'
// import display2 from '../images/display2.jpg'
// import display3 from '../images/display3.jpg'
// import display4 from '../images/display4.jpg'
// import display5 from '../images/display5.jpg'
// import display6 from '../images/display6.jpg'
// import display7 from '../images/display7.jpg'
// import display8 from '../images/display8.jpg'
// import display9 from '../images/display9.jpg'

class FlagsPage extends React.Component {
    render() {
        // const displayFlagPhotos = [
        //     {photo: display1, name: 'Black American Flag', type: 'Non-limited'},
        //     {photo: display2, name: 'American Flag', type: 'Non-limited'},
        //     {photo: display3, name: 'Thin Blue Line American Flag', type: 'Non-limited'},
        //     {photo: display4, name: 'Punisher American Flag', type: 'Non-limited'},
        //     {photo: display5, name: 'Tattered American Flag', type: 'Non-limited'},
        //     {photo: display6, name: 'USAF American Flag', type: 'Limited'},
        //     {photo: display7, name: 'Tread American Flag', type: 'Non-limited'},
        //     {photo: display8, name: 'US Navy American Flag', type: 'Limited'},
        //     {photo: display9, name: 'Thin Red Line American Flag', type: 'Non-limited'}
        // ]
        return (
            <div>
                <NavBar />
            <div className="order">
                <h2>To Order, Please Email Us With Your Desired Size and Design</h2>
            </div>
            <div className='all-flags-holder'>
                {this.props.flagDisplay.map((flag) => (
                    <FlagCard flag={flag.photo} name={flag.name} type={flag.type}/>
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