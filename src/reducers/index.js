export const initialState = {
    meetings: [],
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'load':
        return { ...state, meetings: action.payload }
      case 'save':
        return { ...state, meetings: [...state.meetings, action.payload] }
      default:
        return state
    }
  }
  
  export default reducer
  