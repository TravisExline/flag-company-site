import React from 'react'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../style/Calendar.css'

// const today = moment().format('dddd, MMMM D, YYYY')

const myEvents = [
    {
        eventName: 'Kane County Flea Market',
        eventDate:  moment('Saturday, March 5, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, March 6, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, April 2, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, April 3, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, April 30, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, May 1, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, June 4, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, June 5, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, July 2, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, July 3, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, August 6, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, August 7, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, September 3, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, September 4, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, October 1, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, October 4, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, November 5, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, November 6, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Saturday, December 3, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Sunday, December 4, 2022').format('dddd, MMMM D, YYYY'),
        eventStart: '7am',
        eventEnd: '4pm'
    }
]

class MyCalendar extends React.Component {
    render() {

        const correctDateArray = []

        myEvents.map((myEvent, i) => {
            if (i+1 < myEvents.length) {
                if (new Date(myEvent.eventDate).toDateString() === new Date().toDateString()) {
                    console.log("Date 1 passed")

                    correctDateArray.push(myEvent)
                } else if (new Date() < new Date(myEvent.eventDate) && new Date(myEvent.eventDate) < new Date(myEvents[i + 1].eventDate)) {
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