import React, { useReducer, useEffect } from 'react'
import fields from '../formFieldsData'
import { validateForm, getFieldsData, isFieldNameCorrect, isElementFunction } from '../helper'
import { initialState, reducer } from '../reducers/form'
import { setErrorsAction, clearFieldsValueAction, changeFieldValueAction } from '../actions/form'
import useCalendarProvider from '../hooks/useCalendarProvider'
import Input from '../styled/Input'
import Button from '../styled/Button'
import Form from '../styled/Form'
import Error from '../styled/Error'
import API_URL from '../apiData'

const CalendarForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loadMeetings, saveMeeting] = useCalendarProvider(API_URL)

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

  const renderErrors = () => state.errors.map((err, index) => <Error key={index}>{err}</Error>)

  const renderFormFieldsList = () => fields.map((field) => renderFormField(field))

  const renderFormField = ({ name, label, type, placeholder }) => (
    <Input
      key={name}
      name={name}
      type={type}
      onChange={handleFieldChange}
      value={state[name]}
      placeholder={placeholder}
    >
      {label}
    </Input>
  )

  useEffect(() => {
    loadMeetings()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Form
      onSubmit={handleSubmit}
      title={'Formularz spotkań'}
    >
      <ul>{renderErrors()}</ul>
      {renderFormFieldsList()}
      <Button type={'submit'}>Submit</Button>
    </Form>
  )
}

export default CalendarForm
