import React from 'react'
import type { RenderResult } from '@vtex/test-tools/react'
import { render } from '@vtex/test-tools/react'
import '@testing-library/jest-dom'
import { useMutation } from 'react-apollo'

import type { Idado } from '../../interfaces'
import Form from '.'

const mockDado = {
  Cliente: '',
  Produto: '200104',
  Data: '31/5/2022',
  Nota: 0,
  Comentario: '',
} as Idado

// const mockDadoMutation = {
//   Cliente: 'Fulano teste',
//   Produto: '200104',
//   Data: '31/5/2022',
//   Nota: 2,
//   Comentario: 'qualquer coisa',
// } as Idado

// let mockedUseMutation = useMutation

jest.mock('react-apollo', () => {
  return {
    useMutation: () => ({
      document: {
        fields: [],
      },
    }),
  }
})

describe('form', () => {
  let componente: RenderResult
  const mockHandleSetDado = jest.fn()
  const mockHandleSetRating = jest.fn()
  const mockHandleOnClick = jest.fn()

  beforeEach(() => {
    componente = render(
      <Form
        handleDado={mockDado}
        handleSetDado={mockHandleSetDado}
        handleRating={mockDado.Nota}
        handleSetRating={mockHandleSetRating}
        handleOnClick={mockHandleOnClick}
      />
    )
  })

  describe('form', () => {
    it('DEVE renderizar o componente Form', () => {
      const elemento = componente.getByTestId('formulario')

      expect(elemento).toBeInTheDocument()
    })

    it('DEVE renderizar o título "Avaliação de Produto"', () => {
      const elemento = componente.getByText('Avaliação de Produto')

      expect(elemento).toBeInTheDocument()
    })

    it('DEVE renderizar o botão', () => {
      const botao = componente.getByTestId('botao_enviar')

      expect(botao).toBeDefined()
    })

    it('DEVE renderizar o texto do botão', () => {
      const botao = componente.getByTestId('botao_enviar')

      expect(botao.textContent).toContain('Enviar')
    })
  })
  // describe('Mutation', () => {
  //   it('DEVE confirmar o envio de dados', () => {
  //     mockedUseMutation = {
  //       document: {
  //         fields: [
  //           { key: 'Cliente', value: mockDadoMutation.Cliente },
  //           { key: 'Produto', value: mockDadoMutation.Produto },
  //           { key: 'Data', value: mockDadoMutation.Data },
  //           { key: 'Nota', value: mockDadoMutation.Nota },
  //           { key: 'Comentario', value: mockDadoMutation.Comentario },
  //         ],
  //       },
  //     }
  //     expect(mockedUseMutation).toBeDefined()
  //   })
  // })
})
