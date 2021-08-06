import React , { useContext } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { DataContext } from '../context';

const Calendar = () => {
  const context = useContext(DataContext);
    const {
        trucks,
        reservations
    } = context;

  var events = [];
  for (const val of Object.values(reservations)) {
    events.push({
      id: val.id,
      title: `Truck ${val.truck_id} Reserved`,
      start: val.start,
      end: val.end
    })
  }

  return (
    <FullCalendar
      plugins={[ timeGridPlugin ]}
      initialView="timeGridWeek"
      initialDate="2021-08-08"
      allDaySlot={false}
      events={events}
    />
  )
}

export default Calendar;