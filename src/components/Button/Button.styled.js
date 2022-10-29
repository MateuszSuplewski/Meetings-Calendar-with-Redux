import styled from 'styled-components'

const DefaultStyledButton = styled.button`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
  box-sizing: border-box;

  padding: 0.625rem;
  background-color: #D0DDDD; // theme
  cursor: pointer;
  transition: 0.3s ease;
  border: none;
  display: flex;
  justify-content: center;
  outline: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0.5rem;
  color: gray;
  letter-spacing: 1px;
  font-weight: bold;

  &:hover {
    background-color: #89A9A9; // theme
    color: white;
  }
`

const StyledButton = styled(DefaultStyledButton)(({ style }) => style)

export default StyledButton
