import React from 'react'
import { SMeetingItem, SMeetingLink, SMeetingContent, SDeleteIcon } from './MeetingItem.styled'

const MeetingItem = ({ itemData, onClick }) => {
  const { date, time, firstName, lastName, id, email, style } = itemData
  return (
    <SMeetingItem style={style}>
      <SDeleteIcon onClick={() => onClick(id)} />
      <SMeetingContent>
        {date} {time}
      </SMeetingContent>
      <SMeetingLink href={`mailto: ${email}`}>
        <SMeetingContent>
          {firstName} {lastName}
        </SMeetingContent>
      </SMeetingLink>
    </SMeetingItem>
  )
}

export default MeetingItem
