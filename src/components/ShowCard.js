import React from 'react';

class ShowCard extends React.Component {

    render() {
        return (
            <div className="photo-holder">
                <img src={this.props.photo} className="show-photo"></img>
            </div>
        )
    }
}

export default ShowCard