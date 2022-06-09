import React from 'react'

interface Props {
  children: string
  type?: 'button' | 'submit' | 'reset' | undefined
  id?: string
  onClick?: any
}

function Botao({ children, ...props }: Props) {
  return (
    <button
      data-testId={`botao_${props.id}`}
      onClick={props.onClick}
      id={props.id}
      type={props.type}
      className="f5 grow no-underline br-pill ph3 pv2 dib white ma3 bg-yellow w-30 center bn pointer"
    >
      {children}
    </button>
  )
}

export default Botao
