import React from 'react'
import NavBar from './NavBar'
import '../style/CustomForm.css'
import {createFlag} from '../actions/flagActions'
import {connect} from 'react-redux'
import FlagDisplay from './FlagDisplay'
import MyCalendar from '../containers/MyCalendar'
import WhyBuy from '../containers/WhyBuy'
import BottomNav from '../components/BottomNav'
import emailjs from'emailjs-com'

class CustomForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createFlag({...this.state})
        this.setState({
            customDesign: "",
            // customImg: "",
            customerEmail: "",
            customerName: ""
        })
        emailjs.sendForm('service_ythkd9e', 'template_r0vjkne', event.target, 'user_uqUQrDkBQNB4cXQpJt886')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset()
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
                    <NavBar />
                    <div className='custom-form-holder'>
                        <form className='custom-flag-form' onSubmit={event => this.handleSubmit(event)}>
                            <h1 className='order-here'>Order Here!</h1>
                            <input className='design-description' type='text' name='customDesign' placeholder='Describe Your Design' onChange={event => this.handleChange(event)} value={this.props.customDesign}/>
                            <input className='customer-name' type='text' name='customerName' placeholder='Enter Your Name' onChange={event => this.handleChange(event)} value={this.props.customerName} />
                            <input className='customer-email' type='text' name='customerEmail' placeholder='Enter Your Email' onChange={event => this.handleChange(event)} value={this.props.customerEmail} />
                            {/* <input className='design-photo' type='file' accept='image/*' name="customImg"/> */}
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
                <BottomNav />
            </div>
        )
    }
}

export default connect(null, {createFlag})(CustomForm)