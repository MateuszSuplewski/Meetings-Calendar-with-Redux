const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  date: '',
  time: '',
  errors: []
}

const reducer = (state, { type, payload, key, value }) => {
  switch (type) {
    case 'clear':
      return { ...initialState }
    case 'setErrors':
      return { ...state, errors: [...payload] }
    case 'changeFieldValue':
      return { ...state, [key]: value }
    default:
      return state
  }
}

export { initialState, reducer }
