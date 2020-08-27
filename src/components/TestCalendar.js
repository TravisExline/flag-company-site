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
        
        const correctDateArray = []
        const correctDate = this.props.myEvents.map((myEvent, i) => {
            debugger
            if (i + 1 <= this.props.myEvents.length) {
                if (myEvent.eventDate == this.state.todaysDate) {
                    correctDateArray.push(myEvent)
                }
            } else if (this.state.todaysDate > myEvent.eventDate && myEvent.eventDate < this.props.myEvents[i + 1].eventDate) {
                correctDateArray.push(myEvent)
            } else {
                console.log("I ran, but didn't work")
            }
        })
        

        return(
            <div>
                {correctDateArray.shift().eventDate}
            </div>
        )
    }
}

export default TestCalendar

// const correctDate = this.props.myEvents.map((myEvent, i) => {
//     // debugger
//     if (myEvent.eventDate == this.state.todaysDate) { console.log("I work")
//         return (
//         <div>
//             <h3>{myEvent.eventDate}</h3>
//             <h3>{myEvent.eventStart} - {myEvent.eventEnd}</h3>
//             <h2>{myEvent.eventName}</h2>
//         </div> )
//     } else if (this.state.todaysDate > myEvent.eventDate && myEvent.eventDate < this.props.myEvents[i + 1].eventDate) { console.log("I work")
//         return (
//             <div>
//                 <h3>{myEvent.eventDate}</h3>
//                 <h3>{myEvent.eventStart} - {myEvent.eventEnd}</h3>
//                 <h2>{myEvent.eventName}</h2>
//             </div> )
//     } else {
//         console.log("idk what's happening but i ran")
//     }
// })


       // const correctDate = this.props.myEvents.map((myEvent, i) => {
        //     // debugger
        //     for (j=0; j<this.props.myEvents.length; j++) {
        //         for (let k=0; k < this.props.myEvents.length; k++) {
        //             debugger
        //             if(myEvent.eventDate == this.state.todaysDate) {
        //                 console.log("I work!")
        //             } else if ( this.state.todaysDate > myEvent.eventDate && myEvent.eventDate < this.props.myEvents[k].eventDate) {
        //                 console.log('I work better!')
        //             } else {
        //                 console.log("You suck!")
        //             }
        //         }
        //     }
        // }) 

        // for (let i = 0; i < this.props.myEvents.length; i++) {
        //     for(let k = 0; k < this.props.myEvents.length; i++) {
        //         if (this.props.myEvents[i].eventDate == this.state.todaysDate) {
        //             console.log("I equal todays date!")
        //         } else if (this.state.todaysDate > this.props.myEvents[i].eventDate && this.props.myEvents[i].eventDate < this.props.myEvents[k].eventDate) {
        //             console.log("I'm the upcoming show!")
        //         } else {
        //             console.log("I didn't work at all")
        //         }
        //     }
        // }

        // for (let i = 0; i < this.props.myEvents.length; i++) {
        //     for(let k = 0; k < this.props.myEvents.length; i++) {
        //         if (this.props.myEvents[i].eventDate == this.state.todaysDate) {
        //             correctDate.push(
        //                 <div>
        //                     <h3>{this.props.myEvents[i].eventDate}</h3>
        //                     <h3>{this.props.myEvents[i].eventStart} - {this.props.myEvent[i].eventEnd}</h3>
        //                     <h2>{this.props.myEvents[i].eventName}</h2>
        //                 </div>)
        //         } else if (this.state.todaysDate > this.props.myEvents[i].eventDate && this.props.myEvents[i].eventDate < this.props.myEvents[k].eventDate) {
        //             correctDate.push(
        //                 <div>
        //                     <h3>{this.props.myEvents[i].eventDate}</h3>
        //                     <h3>{this.props.myEvents[i].eventStart} - {this.props.myEvent[i].eventEnd}</h3>
        //                     <h2>{this.props.myEvents[i].eventName}</h2>
        //                 </div>
        //             )
        //         } else {
        //             console.log("I didn't work at all")
        //         }
        //     }
        // }