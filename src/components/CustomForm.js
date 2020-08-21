import React from 'react'
import {createFlag} from '../actions/flagActions'
import {connect} from 'react-redux'

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
            <div className='custom-form-holder'>
                <form className='custom-flag-form' onSubmit={event => this.handleSubmit(event)}>
                    <input className='design-description' type='text' name='customDesign' placeholder='Describe Your Design' onChange={event => this.handleChange(event)} value={this.props.customDesign}/>
                    <input className='design-photo' type='img' name='customImg' placeholder='Upload an Image of Your Design' onChange={event => this.handleChange(event)} value={this.props.customImg}/>
                    <input className='customer-email' type='text' name='customerEmail' placeholder='Enter Your Email' onChange={event => this.handleChange(event)} value={this.props.customerEmail} />
                    <input className='submit-flag' type='submit' value='Request This Design' />
                </form>
            </div>
        )
    }
}

export default connect(null, {createFlag})(CustomForm)