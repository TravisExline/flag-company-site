import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/FlagCard.css'
// import addItemToCart from '../actions/cartItemActions'


class FlagCard extends React.Component {
    // addToCart = () => {
    //     this.props.addItemToCart({...this.state})
    // }



    selectFlagData = (e) => {
        console.log(e)
        this.setState({
            flagId: e
        })
        debugger
    }

    render() {
        return(
            <div className="flag-photo-holder">
                <img src={this.props.flag} alt='flag' className="flag-page-photos"></img>
                <h2 className="flag-name">{this.props.name}</h2>
                <NavLink
                    to='/viewflag'
                    exact><button value={this.props.id}className='view-flag-btn' onClick={e => this.selectFlagData(e.target.value)}>View Flag</button>
                </NavLink>
                {/* <button onClick={this.addToCart}>Add to Cart</button> */}
            </div>
        )
    }
}

export default (FlagCard)