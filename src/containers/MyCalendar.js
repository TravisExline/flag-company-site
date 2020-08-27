import React from 'react'
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

class MyCalendar extends React.Component {
    render() {

        const correctDateArray = []

        myEvents.map((myEvent, i) => {
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

        const correctDate = correctDateArray.shift()
        // debugger  

        return(
            <div className='calendar-holder'>
                <h1 className='calendar-header'>Find Us In Person</h1>
                <div className='in-person-holder'>
                    <h3 className='event-date'>{correctDate.eventDate}</h3>
                    <h3 className='event-time'>{correctDate.eventStart} - {correctDate.eventEnd}</h3>
                    <h2 className='event-name'>{correctDate.eventName}</h2>
                </div>
            </div>
        )
    }
}

 export default MyCalendar