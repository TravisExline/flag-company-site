import React from 'react'
import moment from 'moment'

const today = moment().format('dddd, MMMM D, YYYY')

class TestCalendar extends React.Component {
    constructor() {
        super()
        this.state = {
            todaysDate: today
        }
    }

    showDate() {
        this.props.myEvents.map((myEvent) => {
            if (myEvent.eventDate == this.state.todaysDate.toString) {
                return (
                <div>
                    <h3>{myEvent.eventDate}</h3>
                    <h3>{myEvent.eventStart} - {myEvent.eventEnd}</h3>
                    <h2>{myEvent.eventName}</h2>
                </div> )
            }
        })
    }

    render() {
        debugger
        return(
            <div>
                {this.showDate()}
            </div>
        )
    }
}

export default TestCalendar