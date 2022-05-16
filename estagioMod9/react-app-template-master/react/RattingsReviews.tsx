/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { Input, Alert, Textarea } from 'vtex.styleguide'
import { useProduct } from 'vtex.product-context'
import { useMutation } from 'react-apollo'

import POST_DATA from './graphql/postData.graphql'
import Botao from './components/botao'
import 'tachyons'
import StarRattings from './components/estrelas'

interface Idado {
  Cliente: string
  Produto: string | undefined
  Data: string | undefined
  Nota: number
  Comentario: string | undefined
}

const RattingsReviews: FC = ({}) => {
  const [postRating] = useMutation(POST_DATA)
  const productContextSku = useProduct()
  const data = new Date()
  const dataFormatada = `${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()}`

  const [rating, setRating] = useState(0)
  const [dado, setDado] = useState({
    Cliente: '',
    Produto: '',
    Data: dataFormatada,
    Nota: 0,
    Comentario: '',
  } as Idado)
  const [showPopUp, setShowPopUp] = useState(false)
  const [mensagem, setMensagem] = useState({ tipo: '', mensagem: '' })
  const [mensagemErroValidacaoCliente, setMensagemErroValidacaoCliente] =
    useState('')
  const [mensagemErroValidacaoNota, setMensagemErroValidacaoNota] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (validarCliente() && validarNota()) {
      setMensagemErroValidacaoCliente('')
      setMensagemErroValidacaoNota('')

      enviado()
    } else {
      if (validarCliente()) {
        setMensagemErroValidacaoCliente('')
      } else {
        setMensagemErroValidacaoCliente(
          'Este campo aceita apenas letras e espaços'
        )
      }

      if (validarNota()) {
        setMensagemErroValidacaoNota('')
      } else {
        setMensagemErroValidacaoNota('É obrigatório preencher uma nota')
      }
    }
  }

  function sendRating() {
    postRating({
      variables: {
        account: 'acctglobal',
        acronym: 'AG',
        schema: 'formulario',
        document: {
          document: {
            Cliente: dado.Cliente,
            Produto: dado.Produto,
            Data: dado.Data,
            Nota: dado.Nota,
            Comentario: dado.Comentario,
          },
        },
      },
    })
  }

  function enviado() {
    setDado({ ...dado, Cliente: '', Comentario: '' })
    setRating(0)
    setMensagem({
      tipo: 'success',
      mensagem: 'Seus dados foram enviados com sucesso.',
    })
    modalStatusEnvio()
  }

  function modalStatusEnvio() {
    setShowPopUp(!showPopUp)
  }

  function validarCliente() {
    const re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/

    if (!re.test(dado.Cliente)) {
      return false
    }

    return true
  }

  function validarNota() {
    const re = /^[1-5]+$/

    if (!re.test(dado.Nota.toString())) {
      return false
    }

    return true
  }

  useEffect(() => {
    setDado({ ...dado, Nota: rating })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating])

  useEffect(() => {
    setDado({ ...dado, Produto: productContextSku?.product?.productId })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
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
              size="small"
              disabled
              value={dataFormatada}
            />
          </div>

          <div className="w-50 ml1 mb3 ">
            <Input
              className="bg-base"
              id="produto"
              label="Produto avaliado"
              size="small"
              disabled
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
            errorMessage={mensagemErroValidacaoCliente}
            required
            onChange={(e: any) => setDado({ ...dado, Cliente: e.target.value })}
          />

          <StarRattings
            handleRating={rating}
            handleSetRating={(e: number) => {
              setRating(e)
            }}
            errorMessage={mensagemErroValidacaoNota}
          />

          <Textarea
            label="Comentário:"
            placeholder="Deixe aqui o seu comentário (opcional)"
            onChange={(e: any) =>
              setDado({ ...dado, Comentario: e.target.value })
            }
          />
        </div>

        <div className="flex">
          <Botao onClick={sendRating()} type="submit" id="botao">
            Enviar avaliação
          </Botao>
        </div>
      </form>

      {showPopUp ? (
        <Alert
          type={mensagem.tipo}
          onClose={() => modalStatusEnvio()}
          autoClose="4000"
        >
          {mensagem.mensagem}
        </Alert>
      ) : null}
    </>
  )
}

export default RattingsReviews
