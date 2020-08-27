import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import TestCalendar from '../components/TestCalendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../style/Calendar.css'

const today = moment().format('dddd, MMMM D, YYYY')

const myEvents = [
    {
        eventName: 'Kane County Flea Market',
        eventDate:  moment('Saturday, October 3, 2020').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, October 4, 2020').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, October 31, 2020').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, November 1, 2020').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, December 5, 2020').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, December 6, 2020').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    }
]

// let sorted = eventsList
//     .sort((a, b) => (a.eventDate > b.eventDate ? 1 : -1))
//     .filter((event) =>
//         moment(event.eventDate).isSameOrAfter(today));

// let [nextEvent, ...rest] = eventsList
//     .sort((a, b) => (a.eventDate > b.eventDate ? 1 : -1))
//     .filter((event) => 
//         moment(event.eventDate).isSameOrAfter(today))



class MyCalendar extends React.Component {
    render() {

        const correctDateArray = []
        const correctDate = myEvents.map((myEvent, i) => {
            if (i+1 < myEvents.length) {
                if (myEvent.eventDate == today) {
                    console.log("Date 1 passed")
                    correctDateArray.push(myEvent)
                } else if (today > myEvent.eventDate && myEvent.eventDate < myEvents[i + 1].eventDate) {
                    console.log("Date 2 passed")
                    return (
                    correctDateArray.push(myEvent)
                    )
                } else {
                    console.log("I think it works")
                }
            }
        })    

        return(
            // Boolean(nextEvent) && (
            //     <div>
            //         {nextEvent.eventDate}
            //     </div>
            // )
            <div>
                {correctDateArray.shift().eventDate}
            </div>
        )
    }
}

 export default MyCalendar