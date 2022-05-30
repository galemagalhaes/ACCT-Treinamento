import React from 'react'
import { Button, Input, Textarea } from 'vtex.styleguide'

import 'tachyons'
import StarRatings from '../estrelas'
import { Idado } from '../../interfaces'

export interface Props {
  handleDado: Idado
  handleRating: number
  handleMensagemErroValidacaoCliente?: string
  handleMensagemErroValidacaoNota?: string
  handleSetDado: (event: Idado) => void
  handleSetRating: (event: number) => void
  handleOnClick: (event: any) => void
}
function Form(props: Props) {
  const {
    handleDado,
    handleRating,
    handleSetDado,
    handleSetRating,
    handleMensagemErroValidacaoCliente,
    handleMensagemErroValidacaoNota,
    handleOnClick,
  } = props

  return (
    <div className=" ma5 center pa2">
      <div className="mw-100 flex flex-column">
        <h1 className="center mt5 mb5 f3 gray">Avaliação de Produto</h1>
      </div>

      <div className="flex">
        <div className="w-50 ml1 mb3 ">
          <Input
            id="data"
            label="Data da avaliação"
            size="small"
            disabled
            value={handleDado?.Data}
          />
        </div>
        <div className="w-50 ml1 mb3 ">
          <Input
            className="bg-base"
            id="produto"
            label="Produto avaliado"
            size="small"
            disabled
            value={handleDado?.Produto}
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
          value={handleDado?.Cliente}
          errorMessage={handleMensagemErroValidacaoCliente}
          required
          onChange={(e: any) =>
            handleSetDado({ ...handleDado, Cliente: e.target.value })
          }
        />

        <StarRatings
          handleStar={handleRating}
          handleSetStar={(e: number) => {
            handleSetRating(e)
          }}
          errorMessage={handleMensagemErroValidacaoNota}
        />

        <Textarea
          label="Comentário:"
          placeholder="Deixe seu comentário (opcional)"
          onChange={(e: any) =>
            handleSetDado({ ...handleDado, Comentario: e.target.value })
          }
        />
      </div>

      <div className="flex justify-center mt3 mb3">
        <Button
          onClick={handleOnClick}
          type="button"
          size="small"
          variation="primary"
        >
          Enviar
        </Button>
      </div>
    </div>
  )
}

export default Form
