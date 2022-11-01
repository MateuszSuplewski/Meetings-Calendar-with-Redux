import React from 'react'
import SCalendarWrapper from './CalendarWrapper.styled'

const CalendarWrapper = ({ children, style }) => {
  return <SCalendarWrapper style={style}>{children}</SCalendarWrapper>
}

export default CalendarWrapper
