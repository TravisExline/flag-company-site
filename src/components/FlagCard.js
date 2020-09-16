import React from 'react'
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
                <p className="flag-name">{this.props.name}</p>
                {/* <button onClick={this.addToCart}>Add to Cart</button> */}
            </div>
        )
    }
}

export default (FlagCard)