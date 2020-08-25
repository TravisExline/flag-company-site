import React from 'react'



class TestCalendar extends React.Component {
    constructor() {
        super()
        var today = new Date()
        var newDate = today.getMonth() + "-" + today.getDate() + '-' + today.getFullYear()
        this.state = {
            todaysDate: newDate
        }
    }

    render() {
        return(
            <div>
                {/* {this.props.events.map()} */}
                {this.props.events.forEach(event => 
                    event.eventDate === this.state.todaysDate ? 
                 <div>
                    <h2>{event.eventDate}</h2>
                    <h2>{event.eventStart} - {event.eventEnd}</h2>
                    <h1>{event.eventName}</h1>
                </div> : console.log(this.state.todaysDate, event.eventDate)
                    // if (event.eventDate === this.state.todaysDate) {
                    //     <div>
                    //         <h2>{event.eventDate}</h2>
                    //         <h2>{event.eventStart} - {event.eventEnd}</h2>
                    //         <h1>{event.eventName}</h1>
                    //     </div>
                    // // }
                )}
            </div>
        )
    }
}

export default TestCalendar