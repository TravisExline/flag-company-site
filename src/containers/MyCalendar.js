import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import TestCalendar from '../components/TestCalendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../style/Calendar.css'

const today = moment().format('dddd, MMMM D, YYYY')

const eventsList = [
    {
        eventName: 'Kane County Flea Market',
        eventDate: 'Saturday, October 3, 2020',
        eventStart: '12pm',
        eventEnd: '5pm'
    },
    {
        eventName: 'Kane County Flea Market',
        eventDate: moment('Tuesday, August 25, 2020').format('dddd, MMMM D, YYYY'),
        eventStart: '12pm',
        eventEnd: '5pm'
    }
]



class MyCalendar extends React.Component {
    render() {
        return(
            <div>
                <TestCalendar 
                    myEvents={eventsList}/>
            </div>
        )
    }
}

 export default MyCalendar