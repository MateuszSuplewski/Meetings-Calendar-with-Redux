import React from 'react'
import SButton from './Button.styled'

const Button = ({ onClick, style, type = 'button', children }) => {
  return (
    <SButton style={style} type={type} onClick={onClick}>
      {children}
    </SButton>
  )
}

export default Button
