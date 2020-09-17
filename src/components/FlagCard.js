import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/FlagCard.css'
// import addItemToCart from '../actions/cartItemActions'


class FlagCard extends React.Component {

    addToCart = () => {
        // this.props.addItemToCart({...this.state})
    }

    render() {
        return(
            <div className="flag-photo-holder">
                <img src={this.props.flag} className="flag-page-photos"></img>
                <h2 className="flag-name">{this.props.name}</h2>
                <NavLink
                    to='/viewflag'
                    exact><button className='view-flag-btn'>View Flags</button>
                </NavLink>
                {/* <button onClick={this.addToCart}>Add to Cart</button> */}
            </div>
        )
    }
}

export default (FlagCard)