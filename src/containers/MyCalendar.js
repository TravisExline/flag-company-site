import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../style/Calendar.css'

const localizer = momentLocalizer(moment)

const eventsList = [
    {
        allDay: false,
        start: new Date('August 1, 2020 07:00:00'),
        end: new Date('August 1, 2020 16:00:00'),
        title: "Kane County Flea Market"
    },
    {
        allDay: false,
        start: new Date('August 2, 2020 07:00:00'),
        end: new Date('August 2, 2020 16:00:00'),
        title: "Kane County Flea Market"
    },
    {
        allDay: false,
        start: new Date('September 5, 2020 07:00:00'),
        end: new Date('September 5, 2020 16:00:00'),
        title: "Kane County Flea Market"
    },
    {
        allDay: false,
        start: new Date('September 6, 2020 07:00:00'),
        end: new Date('September 6, 2020 16:00:00'),
        title: "Kane County Flea Market"
    },
]

const MyCalendar = props => (
    <div className="calendar-holder">
        <h2 id='calendar-header'>In Person Pop Ups</h2>
        <Calendar
            localizer={localizer}
            events={eventsList}
            startAccessor="start"
            endAccessor="end"
            style={{height: 850}}
        />
    </div>
)

 export default MyCalendar