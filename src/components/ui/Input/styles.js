import { mq } from '~app/styles/media'
import { styled } from '~app/styles/theme'

export const InputContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  /* ${() => mq('md')`
    max-width: 344px;
  `}

  ${() => mq('lg')`
    max-width: 472px;
  `} */
`

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 3px;
  font-size: 12px;
  display: flex;

  strong {
    margin-left: 2px;
    color: ${({ theme }) => theme.colors.primary.carnation};
  }
`

export const InputField = styled.input`
  height: 40px;
  font-size: 14px;
  padding: 5px 0 5px 10px;
  border: ${({ showError, theme }) => showError ? `1px solid ${theme.colors.primary.carnation}` : 'none'};
  border-radius: 4px;
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary.carnation};
  margin-top: 5px;
`
