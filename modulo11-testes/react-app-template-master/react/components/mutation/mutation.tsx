/* eslint-disable prettier/prettier */
import { FC, useState } from 'react'
import { useMutation } from 'react-apollo'

import POSTING_RATTING from '../../graphql/postData.graphql'
import type { Idado } from '../../interfaces'

const RattingsMutation = () => {
  const [dado, setDado] = useState({
    Cliente:"",
    Produto: productContextSku?.product?.productId,
    Data: dataFormatada,
    Nota: 0,
    Comentario: ""} as Idado)

  const [postRating] = useMutation(POSTING_RATTING)

  function sendRating() {
    postRating({
      variables: {
        account: "acctglobal",
        acronym: "AG",
        schema: "formglau",
        document: {
          fields: [
            {
              key: "Cliente",
              value: dado.Cliente,
            },
            {
              key: "Produto",
              value: dado.Produto,
            },
            {
              key: "Data",
              value: dado.Data,
            },
            {
              key: "Nota",
              value: dado.Nota.toString(),
            },
            {
              key: "Comentario",
              value: dado.Comentario,
            },
          ],
        },
      },
    })
  }
}

export default RattingsMutation
