import styled from 'styled-components'

const SInputContainer = styled.div`
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; // do style global
`

const SInputLabel = styled.label`
  width: 100%;
  padding: 0 0 0.25rem 0.25rem;
  font-size: 1.125rem;
`

export { SInputContainer, SInputLabel, SInput }
