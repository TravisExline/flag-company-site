import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/FlagCard.css'
// import addItemToCart from '../actions/cartItemActions'


class FlagCard extends React.Component {
    constructor() {
        super()
        this.state = {
            flagId: ""
        }
    }

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
                    to={{
                        pathname: '/viewflag',
                        state: { flagImg: this.props.flag,
                            flagId: this.props.id,
                            flagName: this.props.name,
                            smPrice: this.props.smallPrice,
                            medPrice: this.props.medPrice,
                            lrgPrice: this.props.lrgPrice}
                    }}
                    exact><button value={this.props.id}className='view-flag-btn' onClick={e => this.selectFlagData(e.target.value)}>View Flag</button>
                </NavLink>
            </div>
        )
    }
}

export default (FlagCard)