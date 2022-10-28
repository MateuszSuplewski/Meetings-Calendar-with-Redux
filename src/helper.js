const validateForm = (fields, state) => {
  const errors = []

  fields.forEach(({ required, name, label, error, pattern }) => {
    if (required && state[name].length === 0) { errors.push(`Dane w polu ${label} są wymagane`) }
    if (!pattern.test(state[name]) && state[name]) errors.push(error)
  })
  return errors
}

const getFieldsData = (state) => {
  const fieldsData = { ...state }
  delete fieldsData.errors
  return fieldsData
}

const isFieldNameCorrect = (name, state) => {
  const fieldsData = getFieldsData(state)
  return typeof fieldsData[name] !== 'undefined'
}

const isElementFunction = (element) => {
  return typeof element === 'function'
}
export { validateForm, getFieldsData, isFieldNameCorrect, isElementFunction }
