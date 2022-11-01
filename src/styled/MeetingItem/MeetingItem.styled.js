import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const DefaultSMeetingItem = styled.li`
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

const SFontAwesomeDeleteIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  align-self: flex-end;
  color: ${({ theme }) => theme.errorColor};
`

const SDeleteIcon = ({ onClick }) => (
  <SFontAwesomeDeleteIcon
    icon={faDeleteLeft}
    size={'2x'}
    onClick={onClick}
  />
)

const SMeetingItem = styled(DefaultSMeetingItem)(({ style }) => style)

export { SMeetingItem, SMeetingLink, SMeetingContent, SDeleteIcon }
