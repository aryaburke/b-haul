import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek"
        allDaySlot={false}
      />
    )
  }
}