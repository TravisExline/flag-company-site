import React from 'react'
import '../style/FlagCard.css'
import SizeOptionsDrop from './SizeOptionsDrop'
import LimitedSizeOptions from './LimitedSizeOptions'

class FlagCard extends React.Component {

    addToCart = () => {
        
    }

    render() {
        return(
            <div className="flag-photo-holder">
                <img src={this.props.flag} className="flag-page-photos"></img>
                <p className="flag-name">{this.props.name}</p>
                <div className="dropdown">
                    <SizeOptionsDrop smallPrice={this.props.smallPrice} medPrice={this.props.medPrice} lrgPrice={this.props.lrgPrice}/>
                    {/* {this.props.type === "Non-limited" ? <SizeOptionsDrop /> : <LimitedSizeOptions />} */}
                </div>
                <button onClick={this.addToCart}>Add to Cart</button>
            </div>
        )
    }
}

export default FlagCard