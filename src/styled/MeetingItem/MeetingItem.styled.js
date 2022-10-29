import styled from 'styled-components'

const SMeetingItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  padding: 2rem 0.5rem;
  margin: 0.5rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
  border-radius: 8px;
  align-items: center;
  min-width: 200px;
`

const SMeetingLink = styled.a`
  padding-top: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.linkColor};
  transition: 0.3s ease;
  &:hover {
    text-decoration: underline;
  }
`

const SMeetingContent = styled.p`
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.secondaryFont};
`

export { SMeetingItem, SMeetingLink, SMeetingContent }
