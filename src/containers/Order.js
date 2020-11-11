import React from 'react'
import { connect } from 'react-redux'
import SizeOptionsDrop from '../components/SizeOptionsDrop'

class Order extends React.Component {
    render() {
        return(
            <div>
                <form id='orderForm'>
                    <input type='text' className='customerEmail' placeholder='Enter Your Email'/>
                    <input type='text' className='customerName' placeholder='Enter Your Name'/>
                    <select form='orderForm'>
                        {this.props.flagDisplay.flags.map((flag) => (
                            <option value={flag.name} className='flag-name'>{flag.name}</option>
                         ))}
                        {this.props.flagDisplay.flags.map((flag) => (
                            <option value="price"></option>
                         ))}
                    </select>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {flagDisplay: state.flagsReducer}
}

export default connect(mapStateToProps)(Order)