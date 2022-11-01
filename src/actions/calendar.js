const loadMeetingsAction = (meetings) => {
  return {
    type: 'load',
    payload: meetings
  }
}

const saveMeetingAction = (meetingData) => {
  return {
    type: 'save',
    payload: meetingData
  }
}

const deleteMeetingAction = (meetingId) => {
  return {
    type: 'delete',
    payload: meetingId
  }
}

export { loadMeetingsAction, saveMeetingAction, deleteMeetingAction }
