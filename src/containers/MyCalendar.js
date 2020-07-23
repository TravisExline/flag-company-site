import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


const localizer = momentLocalizer(moment)

const eventsList = [
    {
        allDay: false,
        start: new Date('August 1, 2020 07:00:00'),
        end: new Date('August 1, 2020 16:00:00'),
        title: "Kane County Flea Market"
    }
]

const MyCalendar = props => (
    <div>
        <Calendar
            localizer={localizer}
            events={eventsList}
            startAccessor="start"
            endAccessor="end"
            style={{height: 500}}
        />
    </div>
)

 export default MyCalendar