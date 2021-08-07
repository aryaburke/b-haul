import React , { useContext, useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { DataContext } from '../context';

var EVENT_COLOR = "#2C3E50"

const Calendar = () => {
  /*Calendar is the whole left side of the reservations page, the big cal*/
  const context = useContext(DataContext);
  const [eventState, setEventState] = useState([])
  const {
    reservations
  } = context;

  //this could be simplified, but was attempting to use useEffect
  //to force a re-render
  useEffect(() => {
    function getEvents() {
    var events = []
    for (const val of Object.values(reservations)) {
      events.push({
        id: val.id,
        title: `Truck ${val.truck_id} Reserved`,
        start: val.start,
        end: val.end,
        color: EVENT_COLOR
      })
    }
    return events;
  }
  setEventState(getEvents());
}, [reservations])
  
  

  return (
    <FullCalendar
      plugins={[ timeGridPlugin ]}
      initialView="timeGridWeek"
      initialDate="2021-08-08"
      allDaySlot={false}
      events={eventState}
    />
  )
}

export default Calendar;