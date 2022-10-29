import React from 'react'
import { SForm, SFormTitle } from './Form.styled'

const Form = ({ title, onSubmit, children }) => {
  return (
    <SForm onSubmit={onSubmit}>
      <SFormTitle>{title}</SFormTitle>
      {children}
    </SForm>
  )
}

export default Form
