import * as React from 'react'

interface Props {
  placeholder?: string
  type?: string
  id?: string
  value?: string
  handleOnchange: (event: any) => void
}

function Textarea(props: Props) {
  return (
    <textarea
      className="br2 mw-100 ma1 bg-white ba b--silver f5 h4 pa2"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleOnchange}
      {...props}
    />
  )
}

export default Textarea
