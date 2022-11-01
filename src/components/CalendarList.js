import React from 'react'
import { useSelector } from 'react-redux'
import MeetingItem from '../styled/MeetingItem'
import MeetingList from '../styled/MeetingList'
import useCalendarProvider from '../hooks/useCalendarProvider'
import API_URL from '../apiData'

const CalendarList = () => {
  const meetings = useSelector((state) => state.meetings)
  const [, , deleteMeeting] = useCalendarProvider(API_URL)
  const renderMeetingsList = () => meetings.map((item) => renderMeetingsItem(item))

  const renderMeetingsItem = (itemData) => (
    <MeetingItem
      onClick={deleteMeeting}
      key={itemData.id}
      itemData={itemData}
    />
  )

  return <MeetingList>{renderMeetingsList()}</MeetingList>
}

export default CalendarList
