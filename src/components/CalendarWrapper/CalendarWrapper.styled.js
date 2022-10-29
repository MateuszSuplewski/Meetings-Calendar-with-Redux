import styled from 'styled-components'

const SCalendarWrapper = styled.section`
 display: flex;
 align-items: flex-start;
 flex-direction: row-reverse;

 @media screen and (max-width: 576px){
  flex-wrap: wrap;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
 }
`

export { SCalendarWrapper }
