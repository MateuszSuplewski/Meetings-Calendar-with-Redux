import styled from 'styled-components'

const DefaultStyledButton = styled.button`
  width: ${({ fullWidth }) => (fullWidth ? 'calc(100% - 1rem)' : 'calc(300px - 1rem)')};
  padding: 0.625rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  font-family: ${({ theme }) => theme.buttonFont};
  color: gray;
  font-weight: bold;
  border: none;
  letter-spacing: 1px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundHoverColor};
    color: ${({ theme }) => theme.buttonHoverColor};
  }
`

const StyledButton = styled(DefaultStyledButton)(({ style }) => style)

export default StyledButton
