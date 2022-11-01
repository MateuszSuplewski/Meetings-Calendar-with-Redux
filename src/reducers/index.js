export const initialState = {
  meetings: []
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'load':
      return { ...state, meetings: payload }
    case 'save':
      return { ...state, meetings: [...state.meetings, payload] }
    case 'delete':
      return {
        ...state,
        meetings: state.meetings.filter((meeting) => meeting.id !== payload)
      }
    default:
      return state
  }
}

export default reducer
