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
                <h2 className="flag-name">{this.props.name}</h2>
                {/* <p>Flag Description here Yay!</p> */}
                <button className='view-flag-btn'>View Flags</button>
                {/* <button onClick={this.addToCart}>Add to Cart</button> */}
            </div>
        )
    }
}

export default (FlagCard)