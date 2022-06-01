import React from 'react'
import { render, RenderResult } from '@vtex/test-tools/react'
// import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Idado } from '../../interfaces'
import Form from '.'

const mockDado = {
  Cliente: '',
  Produto: '200104',
  Data: '31/5/2022',
  Nota: 1,
  Comentario: '',
} as Idado

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
    it('Should render title of form', () => {
      const elemento = componente.getByText('Avaliação de Produto')

      expect(elemento).toBeInTheDocument()
      // expect(queryByText('Hey, Fred')).toBeInTheDocument()
    })
  })
})
