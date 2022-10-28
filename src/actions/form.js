const setErrorsAction = (errors) => {
  return {
    type: 'setErrors',
    payload: errors
  }
}
  
const clearFieldsValueAction = () => {
  return {
    type: 'clear'
  }
}
  
const changeFieldValueAction = (inputName, inputValue) => {
  return {
    type: 'changeFieldValue',
    key: inputName,
    value: inputValue
  }
}
  
export { setErrorsAction, clearFieldsValueAction, changeFieldValueAction }
  