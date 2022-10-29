import styled from 'styled-components'

const SMeetingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`

export { SMeetingList }
