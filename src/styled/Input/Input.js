import React from 'react'
import { SInputContainer, SInputLabel, SInput } from './Input.styled'

const Input = ({ name, type, onChange, value, placeholder, style, children }) => {
  return (
    <SInputContainer style={style}>
      <SInputLabel htmlFor={name}>{children}</SInputLabel>
      <SInput
        name={name}
        id={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </SInputContainer>
  )
}

export default Input
