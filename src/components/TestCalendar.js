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

    render() {
        const correctDate = this.props.myEvents.map((myEvent, i) => {
            debugger
            if (myEvent.eventDate == this.state.todaysDate) { console.log("I work")
                // return (
                // <div>
                //     <h3>{myEvent.eventDate}</h3>
                //     <h3>{myEvent.eventStart} - {myEvent.eventEnd}</h3>
                //     <h2>{myEvent.eventName}</h2>
                // </div> )
            } else if (this.state.todaysDate > myEvent.eventDate && myEvent.eventDate < this.props.myEvents[i + 1].eventDate ) { console.log("I work")
                // return (
                //     <div>
                //         <h3>{myEvent.eventDate}</h3>
                //         <h3>{myEvent.eventStart} - {myEvent.eventEnd}</h3>
                //         <h2>{myEvent.eventName}</h2>
                //     </div> )
            } else {
                console.log("idk what's happening but i ran")
            }
        })

        return(
            <div>
                {correctDate}
            </div>
        )
    }
}

export default TestCalendar