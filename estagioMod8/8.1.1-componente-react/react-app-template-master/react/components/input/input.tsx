import * as React from 'react'

interface PropsInput {
  placeholder?: string
  type?: string
  id?: string
  value?: string
  className?: string
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: PropsInput) {
  const { value, type, placeholder, onchange } = props

  return (
    <input
      className={props.className} // "br2 mb4 bg-white gray ba b--silver f5 pa2"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onchange}
      {...props}
      required
    />
  )
}

export default Input
