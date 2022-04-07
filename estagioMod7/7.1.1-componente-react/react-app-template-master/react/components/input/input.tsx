import * as React from 'react'

interface Props {
  placeholder?: string
  type?: string
  id?: string
  value?: string
  className?: string
  pattern?: string
  title?: string
  handleOnchange?: (e: any) => void
}

function Input(props: Props) {
  return (
    <input
      className="br4 mw-100 ma1 bg-light-gray gray bn f5 pa3"
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      pattern={props.pattern}
      title={props.title}
      onChange={props.handleOnchange}
      {...props}
      required
    />
  )
}

export default Input
