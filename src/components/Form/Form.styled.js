import styled from 'styled-components'

const SForm = styled.form`
  max-width: 300px;
  margin: 0.375rem;
  padding: 0.625rem 0.375rem;
  background-color: #C6ECAE;
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 8px;
  @media screen and (max-width: 576px){
   position: initial;
 }
`

const SFormTitle = styled.h3`
  color: gray;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0.5rem 1.25rem 0.5rem;
  font-weight: 600;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export { SForm, SFormTitle }
