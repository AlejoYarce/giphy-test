import React from 'react'

import {
  InputContainer, Label, InputField, ErrorMessage,
} from './styles'

const validRequired = (required, value) => (required ? value !== '' : true)

const validMatch = (pattern, value) => (pattern ? new RegExp(pattern).test(value) : true)

const validLimit = (limit, value) => (limit ? value.length <= limit : true)

const Input = ({
  name,
  label,
  placeholder,
  pattern,
  limit,
  value,
  type = 'text',
  onChange = () => { },
  required,
  error,
  showError,
  // disabled,
}) => {
  const onChangeHandler = (e) => {
    const { value: targetValue } = e.target
    const valid = validRequired(required, targetValue)
      && validMatch(pattern, targetValue)
      && validLimit(limit, targetValue)

    onChange(name, targetValue, valid)
  }

  return (
    <InputContainer>
      {label && (
        <Label htmlFor={name}>
          {label}{required && <strong>*</strong>}
        </Label>
      )}
      <InputField
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        defaultValue={value}
        // disabled={disabled}
        showError={showError}
        required={required}
        aria-label={label || name}
        className={showError ? 'box-shadow-error' : 'box-shadow'}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
      {showError && error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  )
}

export default Input
