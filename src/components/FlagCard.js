import React from 'react'
import '../style/FlagCard.css'
import SizeOptionsDrop from './SizeOptionsDrop'
import LimitedSizeOptions from './LimitedSizeOptions'

class FlagCard extends React.Component {

    render() {
        return(
            <div className="flag-photo-holder">
                <img src={this.props.flag} className="flag-page-photos"></img>
                <p className="flag-name">{this.props.name}</p>
                <div className="dropdown">
                    {this.props.type === "Non-limited" ? <SizeOptionsDrop /> : <LimitedSizeOptions />}
                </div>
            </div>
        )
    }
}

export default FlagCard