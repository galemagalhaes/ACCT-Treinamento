import * as React from 'react'

interface Props {
  placeholder?: string
  type?: string
  id?: string
}

function Textarea(props: Props) {
  return (
    <textarea
      className="br2 mw-100 ma1 bg-light-gray bn f5 h4 pa2"
      type={props.type}
      placeholder={props.placeholder}
      {...props}
    />
  )
}

export default Textarea
