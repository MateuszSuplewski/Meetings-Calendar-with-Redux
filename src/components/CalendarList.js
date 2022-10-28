import React from 'react'
import { useSelector } from 'react-redux'

const CalendarList = () => {
  const meetings = useSelector((state) => state.meetings)

  const renderMeetingsList = () =>
    meetings.map((item) => renderMeetingsItem(item))

  const renderMeetingsItem = ({ id, date, time, email, firstName, lastName }) => (
    <li key={id}>
      {date} {time} {'=> '}
      <a href={`mailto: ${email}`}>
        {firstName} {lastName}
      </a>
    </li>
  )

  return <ul>{renderMeetingsList()}</ul>
}

export default CalendarList
