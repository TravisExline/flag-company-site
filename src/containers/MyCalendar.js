import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import TestCalendar from '../components/TestCalendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../style/Calendar.css'

// const localizer = momentLocalizer(moment)

// const eventsList = [
//     {
//         allDay: false,
//         start: new Date('August 1, 2020 07:00:00'),
//         end: new Date('August 1, 2020 16:00:00'),
//         title: "Kane County Flea Market"
//     },
//     {
//         allDay: false,
//         start: new Date('August 2, 2020 07:00:00'),
//         end: new Date('August 2, 2020 16:00:00'),
//         title: "Kane County Flea Market"
//     },
//     {
//         allDay: false,
//         start: new Date('September 5, 2020 07:00:00'),
//         end: new Date('September 5, 2020 16:00:00'),
//         title: "Kane County Flea Market"
//     },
//     {
//         allDay: false,
//         start: new Date('September 6, 2020 07:00:00'),
//         end: new Date('September 6, 2020 16:00:00'),
//         title: "Kane County Flea Market"
//     },
// ]

// const MyCalendar = props => (
//     <div className="calendar-holder">
//         <h2 id='calendar-header'>In Person Pop Ups</h2>
//         <TestCalendar
//             localizer={localizer}
//             events={eventsList}
//             startAccessor="start"
//             endAccessor="end"
//             style={{height: 850}}
//         />
//     </div>
// )
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
                    events={eventsList}/>
            </div>
        )
    }
}

 export default MyCalendar