/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */

import * as React from 'react'

import 'tachyons'
import Input from './components/input'
import Botao from './components/botao'

interface RattingsReviewsProps {}

const RattingsReviews: StorefrontFunctionComponent<RattingsReviewsProps> = ({}) => {
  return (
    <div className="div-principal">
      <label>
        Produto:
        <Input placeholder="SKU do Produto" />
      </label>
      <label>
        Usuário:
        <Input placeholder="Nome do usuário" />
      </label>
      <label>
        Data:
        <Input placeholder="Data da avaliação" />
      </label>
      <label>
        Nota:
        <Input placeholder="Nota da avaliação" />
      </label>
      <label>
        Comentário:
        <Input placeholder="Deixe seu comentário (opcional)" />
      </label>

      <Botao>Enviar avaliação</Botao>
    </div>
  )
}

RattingsReviews.schema = {
  title: 'editor.rattings-reviews.title',
  description: 'editor.rattings-reviews.description',
  type: 'object',
  properties: {},
}
export default RattingsReviews
