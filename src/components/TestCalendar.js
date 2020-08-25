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

    // showDate() {
    //     this.props.myEvents.map((myEvent) => {
    //         if (myEvent.eventDate == this.state.todaysDate) {
    //             console.log("you win!")
    //             return (
    //             <div>
    //                 <h3>{myEvent.eventDate}</h3>
    //                 <h3>{myEvent.eventStart} - {myEvent.eventEnd}</h3>
    //                 <h2>{myEvent.eventName}</h2>
    //             </div> )
    //         } else {
    //             console.log('you suck')
    //         }
    //     })
    // }

    render() {
        // debugger
        const correctDate = this.props.myEvents.map((myEvent) => {
            if (myEvent.eventDate == this.state.todaysDate) {
                console.log("you win!")
                return (
                <div>
                    <h3>{myEvent.eventDate}</h3>
                    <h3>{myEvent.eventStart} - {myEvent.eventEnd}</h3>
                    <h2>{myEvent.eventName}</h2>
                </div> )
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