import React from 'react'
import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm'
import CalendarWrapper from '../styled/CalendarWrapper'

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarList/>
      <CalendarForm/>
    </CalendarWrapper>
  )
}

export default Calendar
