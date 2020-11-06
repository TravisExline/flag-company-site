import React from 'react'
import NavBar from './NavBar'
import '../style/CustomForm.css'
import {createFlag} from '../actions/flagActions'
import {connect} from 'react-redux'
import FlagDisplay from './FlagDisplay'
import MyCalendar from '../containers/MyCalendar'
import WhyBuy from '../containers/WhyBuy'
import BottomNav from '../components/BottomNav'

class CustomForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createFlag({...this.state})
        this.setState({
            customDesign: "",
            customImg: "",
            customerEmail: ""
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className='form-holder'>
                    <div className="custom-header">
                        <h1 id="custom-company-name">Scorched Wood Flag Company</h1>
                        <div className='nav-holder'><NavBar/></div>
                    </div>
                    <div className='custom-form-holder'>
                        <form className='custom-flag-form' onSubmit={event => this.handleSubmit(event)}>
                            <input className='design-description' type='text' name='customDesign' placeholder='Describe Your Design' onChange={event => this.handleChange(event)} value={this.props.customDesign}/>
                            <input className='customer-email' type='text' name='customerEmail' placeholder='Enter Your Email' onChange={event => this.handleChange(event)} value={this.props.customerEmail} />
                            <input className='design-photo' type='file' accept='image/*' />
                            {/* this works and is an alternative, just need to use javascript to make the selected file visable
                            <label className='custom-file-upload'>
                                <input type="file" accept='image/*' />
                                Upload Your Image
                            </label> */}
                            <input className='submit-flag' type='submit' value='Request This Design' />
                        </form>
                    </div>
                </div>
                <WhyBuy />
                <FlagDisplay />
                <MyCalendar />
                <div className='landing-footer'>
                    <h1 id='landing-company-name-footer'>Scorched Wood Flag Company</h1>
                    <div className='footer-nav-holder'><BottomNav /></div>
                </div>
            </div>
        )
    }
}

export default connect(null, {createFlag})(CustomForm)