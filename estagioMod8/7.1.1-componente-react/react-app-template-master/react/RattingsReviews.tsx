/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */

import  React, { useEffect, useState } from 'react'

import Input from './components/input'
import Botao from './components/botao'
import Textarea from './components/textarea'
import 'tachyons'
import StarRattings from './components/estrelas'

interface RattingsReviewsProps {}

const RattingsReviews: StorefrontFunctionComponent<RattingsReviewsProps> = ({}) => {
  const data = new Date()
  const dataFormatada = `${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()}`

  const [rating, setRating] = useState(0)
  const [dado, setDado] = useState({Cliente:"", Produto:"", Data: dataFormatada, Nota: 0, Comentario: ""})


  const handleSubmit = (e: any) => {
    e.preventDefault()

    // const produto = document.querySelector('#produto') as HTMLInputElement
    // const comentario = document.querySelector('#comentario') as HTMLInputElement

    const dados = {
      Cliente: dado.Cliente,
      Produto: dado.Produto,
      Data: dataFormatada,
      // eslint-disable-next-line radix
      Nota: rating,
      Comentario: dado.Comentario,
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

  useEffect(()=>{
    setDado({...dado, Nota: rating})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[rating])
  console.log(dado)

  return (
    <form
      onSubmit={handleSubmit}
      id="form"
      className="w-30 ma5 center ba b--silver pa2"
    >
      <div className="mw-100 flex flex-column">
        <h1 className="center mt5 mb5 f3 gray">Avaliação de Produto</h1>
      </div>

      <div className="flex">

        <div className="w-50">
          <label htmlFor="data" className="f6 pl2">
            Hoje é:
          </label>
          <Input
            id="data"
            value={dataFormatada}
            className="br2 mb4 bg-white gray ba b--silver f5 pa2"/>
        </div>

        <div className="w-50 dib ">
          <label htmlFor="produto" className="f6 pl2">
            Produto avaliado:
          </label>
          <Input
            id="produto"
            placeholder="SKU do produto"
            className="br2 mb4 bg-white gray ba b--silver f5 pa2"/>
        </div>

      </div>

      <div className="mw-100 flex flex-column">
        <label htmlFor="user" className="f6 pl2 w-100">
          Usuário avaliador:
        </label>
        <Input
          id="user"
          className="br2 mb4 bg-white gray ba b--silver f5 pa2"
          placeholder="Digite aqui o nome do usuário"
          onchange={e => setDado({...dado, Cliente: e.target.value})}/>

          <StarRattings handleRating={rating} handleSetRating={(e:number)=>{setRating(e)}} />


      <label htmlFor="comentario" className="f6 pl2">
        Comentário sobre o produto:
      </label>
      <Textarea id="comentario" placeholder="Deixe aqui o seu comentário (opcional)" />

      </div>

      <div className="flex">
      <Botao type="submit" id="botao">
        Enviar avaliação
      </Botao>
      </div>
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
