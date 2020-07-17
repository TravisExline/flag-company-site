import React from 'react'
import '../style/FlagCard.css'
import SizeOptionsDrop from './SizeOptionsDrop'
import LimitedSizeOptions from './LimitedSizeOptions'

class FlagCard extends React.Component {

    isLimited = () => {
        if(this.props.type == "Non-limited") {
            return <div className="dropdown"><SizeOptionsDrop /></div>
        } else {
            return <div className="dropdown"><LimitedSizeOptions /></div>
        }
    }

    render() {
        return(
            <div className="flag-photo-holder">
                <img src={this.props.flag} className="flag-page-photos"></img>
                <p className="flag-name">{this.props.name}</p>
                <div className="dropdown">
                    <SizeOptionsDrop />
                </div>
            </div>
        )
    }
}

export default FlagCard