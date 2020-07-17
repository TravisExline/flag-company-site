import React from 'react'
import '../style/FlagCard.css'
import SizeOptionsDrop from './SizeOptionsDrop'

class FlagCard extends React.Component {
    render() {
        debugger
        return(
            <div className="flag-photo-holder">
                <img src={this.props.flag} className="flag-page-photos"></img>
        <       p>{this.props.name}</p>
                <SizeOptionsDrop />
            </div>
        )
    }
}

export default FlagCard