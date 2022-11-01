import styled from 'styled-components'

const DefaultSMeetingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`

const SMeetingList = styled(DefaultSMeetingList)(({ style }) => style)

export default SMeetingList
