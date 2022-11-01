import React from 'react'
import SMeetingList from './MeetingList.styled'

const MeetingList = ({ children, style }) => {
  return <SMeetingList style={style}>{children}</SMeetingList>
}

export default MeetingList
