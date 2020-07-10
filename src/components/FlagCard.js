import React from 'react'

class FlagCard extends React.Component {
    render() {
        return (
            <div className="flag-photo-holder">
                <img src={this.props.flag} className="flag-card-photo"></img>
            </div>
        )
    }
}

export default FlagCard