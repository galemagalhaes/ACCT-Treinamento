import * as React from 'react'

interface Props {
  placeholder?: string
  type?: string
  id?: string
  value?: any
  className?: string
}

function Input(props: Props) {
  return (
    <input
      className="br4 mw-100 mb4 bg-light-gray gray bn f5 pa3"
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      {...props}
      required
    />
  )
}

export default Input
