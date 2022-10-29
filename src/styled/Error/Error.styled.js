import styled from 'styled-components'

const SError = styled.li`
  color: ${({ theme }) => theme.errorColor};
  padding: 0.125rem 0.5rem;
  box-sizing: border-box;
  display: inline-block;
  border-left: 2px solid ${({ theme }) => theme.errorColor};
  font-family: ${({ theme }) => theme.errorFont};
`

export { SError }
