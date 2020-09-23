import React from 'react'
import '../style/FlagDisplay.css'
import display1 from '../images/display1.jpg'
import display2 from '../images/display2.jpg'
import display3 from '../images/display3.jpg'
import display4 from '../images/display4.jpg'
import display5 from '../images/display5.jpg'
import display6 from '../images/display6.jpg'
import display7 from '../images/display7.jpg'
import display8 from '../images/display8.jpg'
import display9 from '../images/display9.jpg'


class FlagDisplay extends React.Component {
    constructor() {
        super()
        this.state = {
            flagPhotos: [
               {"img" : display1, "name": "Black American Flag"},
               {"img" : display2, "name": "American Flag"},
               {"img" : display3, "name": "Thin Blue Line American Flag"},
               {"img" : display4, "name": "Punisher American Flag"},
               {"img" : display5, "name": "Tattered American Flag"},
               {"img" : display6, "name": "USAF American Flag"},
               {"img" : display7, "name": "Don't Tread American Flag"},
               {"img" : display8, "name": "USMC American Flag"},
               {"img" : display9, "name": "Thin Red Line American Flag"}
            ],
            itemsToShow: 3,
            expanded: false
        }
        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.state.itemsToShow === 3 ? (
            this.setState({ itemsToShow: this.state.flagPhotos.length, expanded: true })
        ) : (
            this.setState({ itemsToShow: 3, expanded: false})
        )
    }

    render() {
        return(
            <div className='flag-display-holder'>
                <div className='flag-list-holder'>
                    <div className='flag-display-list'>
                         {this.state.flagPhotos.slice(0, this.state.itemsToShow).map((flag, i) => 
                            <div className='landing-flag-display' key={i}>
                            <img className="landing-display-photo" src={flag.img} alt='flag'></img>
                            <h3 className="landing-flag-name">{flag.name}</h3>
                        </div>)}
                    </div>
                </div>
                <button className='show-btn' onClick={this.showMore}>
                    {this.state.expanded ? (
                        <span>Show less</span>
                         ) : (
                        <span>Show more</span>
                    )}
                </button>
            </div>
        )
    }

}

export default FlagDisplay