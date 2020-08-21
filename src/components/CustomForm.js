import React from 'react'

class CustomForm extends React.Component {
    render() {
        return (
            <div className='custom-form-holder'>
                <form className='custom-flag-form'>
                    <input className='design-description' type='text' placeholder='Describe Your Design' />
                    <input className='design-photo' type='img' placeholder='Upload an Image of Your Design' />
                    <input className='submit-flag' type='submit' value='Request This Design' />
                </form>
            </div>
        )
    }
}

export default CustomForm