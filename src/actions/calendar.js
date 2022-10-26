const loadMeetingsAction = (meetings) => {
    return {
      type: 'load',
      payload: meetings,
    }
  }
  
  const saveMeetingAction = (meetingData) => {
    return {
      type: 'save',
      payload: meetingData,
    }
  }
  
  export { loadMeetingsAction, saveMeetingAction }
  