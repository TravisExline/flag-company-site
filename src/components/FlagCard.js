import React from 'react'
import '../style/FlagCard.css'
// import addItemToCart from '../actions/cartItemActions'
import SizeOptionsDrop from './SizeOptionsDrop'


class FlagCard extends React.Component {

    addToCart = () => {
        // this.props.addItemToCart({...this.state})
    }

    render() {
        return(
            <div className="flag-photo-holder">
                <img src={this.props.flag} className="flag-page-photos"></img>
                <p className="flag-name">{this.props.name}</p>
                <div className="dropdown">
                    <SizeOptionsDrop smallPrice={this.props.smallPrice} medPrice={this.props.medPrice} lrgPrice={this.props.lrgPrice}/>
                </div>
                <button onClick={this.addToCart}>Add to Cart</button>
            </div>
        )
    }
}

export default (FlagCard)