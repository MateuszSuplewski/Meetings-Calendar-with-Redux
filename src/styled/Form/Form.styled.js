import styled from 'styled-components'

const DefaultSForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 350px;
  margin: 0.375rem;
  padding: 0.625rem 0.375rem;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  border-radius: 0.375rem;
  position: sticky;
  width: calc(100% - 0.75rem);
  top: 8px;
  box-sizing: border-box;
  @media screen and (max-width: 576px) {
    position: initial;
  }
`

const SFormTitle = styled.h3`
  color: ${({ theme }) => theme.secondaryFontColor};
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0.5rem 1.25rem 0.5rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.secondaryFont};
`

const SForm = styled(DefaultSForm)(({ style }) => style)

export { SForm, SFormTitle }
