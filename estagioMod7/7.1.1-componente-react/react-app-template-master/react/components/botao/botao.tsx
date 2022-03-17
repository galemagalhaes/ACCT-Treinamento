import React from 'react'

interface Props {
  children: string
  cor?: string
}

function Botao({ children, ...props }: Props) {
  return (
    <button className="ph3" color={props.cor}>
      {children}
    </button>
  )
}

export default Botao
