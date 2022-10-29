import React from 'react'
import { SMeetingItem, SMeetingLink, SMeetingContent} from './MeetingItem.styled'

const MeetingItem = ({ itemData }) => {
  const { date, time, firstName, lastName, email } = itemData
  return (
    <SMeetingItem>
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
