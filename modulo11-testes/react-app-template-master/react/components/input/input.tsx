import * as React from 'react'

interface PropsInput {
  placeholder?: string
  type?: string
  id?: string
  value?: string
  className?: string
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  errorMessage?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

function Input(props: PropsInput) {
  const { value, type, placeholder, onchange, disabled, errorMessage } = props

  return (
    <>
      <input
        className={props.className} // "br2 mb4 bg-white gray ba b--silver f5 pa2"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onchange}
        {...props}
        disabled={disabled}
        required
      />
      {errorMessage && <span />}
    </>
  )
}

export default Input
