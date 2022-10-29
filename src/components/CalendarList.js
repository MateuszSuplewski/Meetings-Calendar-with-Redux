import React from 'react'
import { useSelector } from 'react-redux'
import MeetingItem from './MeetingItem'
import MeetingList from './MeetingList'

const CalendarList = () => {
  const meetings = useSelector((state) => state.meetings)

  const renderMeetingsList = () => meetings.map((item) => renderMeetingsItem(item))

  const renderMeetingsItem = (itemData) => <MeetingItem key={itemData.id} itemData={itemData}/>
  
  return <MeetingList>{renderMeetingsList()}</MeetingList>
}

export default CalendarList
