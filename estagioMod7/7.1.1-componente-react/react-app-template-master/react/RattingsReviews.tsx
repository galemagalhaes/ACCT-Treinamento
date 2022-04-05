/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */

import * as React from 'react'

import Input from './components/input'
import Botao from './components/botao'
import Textarea from './components/textarea'
import 'tachyons'

interface RattingsReviewsProps {}

const RattingsReviews: StorefrontFunctionComponent<RattingsReviewsProps> = ({}) => {
  const data = new Date()
  const dataFormatada = `${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()}`

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const cliente = document.querySelector('#user') as HTMLInputElement
    const produto = document.querySelector('#produto') as HTMLInputElement
    const nota = document.querySelector('#nota') as HTMLInputElement
    const comentario = document.querySelector('#comentario') as HTMLInputElement

    const dados = {
      Cliente: cliente.value,
      Produto: produto.value,
      Data: dataFormatada,
      // eslint-disable-next-line radix
      Nota: parseInt(nota.value),
      Comentario: comentario.value,
    }

    console.log(dados)
    const raw = JSON.stringify(dados)
    const myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    }

    fetch('/api/dataentities/AG/documents', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="form"
      className="flex flex-column w-30 ma5 center ba b--light-gray pa2"
    >
      <h1 className="center mt5 mb5 f3 gray">Avaliação de Produto</h1>
      <label htmlFor="data" className="f6 pl2">
        Data da avaliação:
      </label>
      <Input id="data" value={dataFormatada} />

      <label htmlFor="produto" className="f6 pl2">
        Produto avaliado:
      </label>
      <Input id="produto" placeholder="Digite o SKU do produto" />

      <label htmlFor="user" className="f6 pl2">
        Usuário avaliador:
      </label>
      <Input id="user" placeholder="Digite aqui o nome do usuário" />

      <label htmlFor="nota" className="f6 pl2">
        Nota:
      </label>
      <Input id="nota" placeholder="Digite a nota para este produto" />

      <label htmlFor="comentario" className="f6 pl2">
        Comentário sobre o produto:
      </label>
      <Textarea
        id="comentario"
        placeholder="Deixe aqui o seu comentário (opcional)"
      />

      <Botao type="submit" id="botao">
        Enviar avaliação
      </Botao>
    </form>
  )
}

RattingsReviews.schema = {
  title: 'editor.rattings-reviews.title',
  description: 'editor.rattings-reviews.description',
  type: 'object',
  properties: {},
}
export default RattingsReviews
