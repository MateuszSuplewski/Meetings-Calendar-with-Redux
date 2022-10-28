import React, { useReducer } from 'react'
import fields from '../formFieldsData'

import { validateForm, getFieldsData, isFieldNameCorrect, isElementFunction } from '../helper'
import { initialState, reducer } from '../reducers/form'
import { setErrorsAction, clearFieldsValueAction, changeFieldValueAction } from '../actions/form'
import useCalendarProvider from '../hooks/useCalendarProvider'

const CalendarForm = () => {
  const apiUrl = 'http://localhost:3005/meetings'
  const [state, dispatch] = useReducer(reducer, initialState)
  const [, saveMeeting] = useCalendarProvider(apiUrl)

  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validateForm(fields, state)
    dispatch(setErrorsAction(errors))

    if (errors.length === 0) {
      if (isElementFunction(saveMeeting)) {
        saveMeeting(getFieldsData(state))
      }
      dispatch(clearFieldsValueAction())
    }
  }

  const handleFieldChange = (e) => {
    if (isFieldNameCorrect(e.target.name, state)) {
      dispatch(changeFieldValueAction(e.target.name, e.target.value))
    }
  }

  const renderErrors = () =>
    state.errors.map((err, index) => <li key={index}>{err}</li>)

  const renderFormFieldsList = () =>
    fields.map((field) => renderFormField(field))

  const renderFormField = ({ name, label, type, placeholder }) => (
    <div key={name}>
      <label>
        {label}:{' '}
        <input
          type={type}
          name={name}
          onChange={handleFieldChange}
          value={state[name]}
          placeholder={placeholder}
        />
      </label>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <ul>{renderErrors()}</ul>
      {renderFormFieldsList()}
      <div>
        <input
          type={'submit'}
          value={'zapisz'}
        />
      </div>
    </form>
  )
}

export default CalendarForm