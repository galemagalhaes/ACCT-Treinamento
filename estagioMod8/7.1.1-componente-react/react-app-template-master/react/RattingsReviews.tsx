/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */

import  React, { useEffect, useState, FC } from 'react'
import { Input } from 'vtex.styleguide'
import { useProduct } from 'vtex.product-context'

import Botao from './components/botao'
import Textarea from './components/textarea'
import 'tachyons'
import StarRattings from './components/estrelas'

interface Idado {
  Cliente: string | undefined;
  Produto: string | undefined;
  Data: string | undefined;
  Nota: number | undefined;
  Comentario: string | undefined;

}
const RattingsReviews: FC = ({}) => {
  const productContextSku = useProduct()
  const data = new Date()
  const dataFormatada = `${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()}`

  const [rating, setRating] = useState(0)
  const [dado, setDado] = useState({Cliente:"", Produto:"", Data: dataFormatada, Nota: 0, Comentario: ""} as Idado)


  const handleSubmit = (e: any) => {
    e.preventDefault()

    const raw = JSON.stringify(dado)
    const myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    }

    fetch('/api/dataentities/AG/documents', requestOptions)
      .then((response) => response.text())
      .then((result) => {console.log(result); setDado({...dado, Cliente:"", Comentario:""})})
      .catch((error) => console.log('error', error))
  }

  useEffect(()=>{
    setDado({...dado, Nota: rating})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[rating])

useEffect(()=>{
  setDado({...dado, Produto: productContextSku?.product?.productId})
 // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

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
        <div className="w-50 mr1 mb3">
          <Input
            id="data"
            label="Data da avaliação"
            size= "small"
            value={dataFormatada}
          />
        </div>
        <div className="w-50 ml1 mb3 ">
          <Input
            className="bg-base"
            id="produto"
            label="Produto avaliado"
            size= "small"
            value={productContextSku?.product?.productId}
          />
        </div>
      </div>

      <div className="mw-100 flex flex-column">

        <Input
          id="user"
          size="small"
          className="br2 bn mb4 pa2"
          placeholder="Digite aqui o nome do usuário"
          label="Nome do usuário"
          value={dado.Cliente}
          // pattern="/[A-z]+\s/"
          // errorMessage="Invalid field value"
          required
          onChange={(e: any) => setDado({...dado, Cliente: e.target.value})}
          />

          <StarRattings handleRating={rating} handleSetRating={(e:number)=>{setRating(e)}} />


      <label htmlFor="comentario" className="f6 pl2">
        Comentário sobre o produto:
      </label>
      <Textarea
      id="comentario"
      placeholder="Deixe aqui o seu comentário (opcional)"
      value={dado.Comentario}
      handleOnchange={(e: any) => setDado({...dado, Comentario: e.target.value})}/>

      </div>

      <div className="flex">
      <Botao type="submit" id="botao">
        Enviar avaliação
      </Botao>
      </div>
    </form>
  )
}

// RattingsReviews.schema = {
//   title: 'editor.rattings-reviews.title',
//   description: 'editor.rattings-reviews.description',
//   type: 'object',
//   properties: {},
// }
export default RattingsReviews
