import styled from 'styled-components'

const DefaultSInputContainer = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  box-sizing: border-box;
`

const SInput = styled.input`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.7);
  font-family: ${({ theme }) => theme.secondaryFont};
`

const SInputLabel = styled.label`
  width: 100%;
  padding: 0 0 0.25rem 0.25rem;
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.primaryFont};
`

const SInputContainer = styled(DefaultSInputContainer)(({ style }) => style)

export { SInputContainer, SInputLabel, SInput }
