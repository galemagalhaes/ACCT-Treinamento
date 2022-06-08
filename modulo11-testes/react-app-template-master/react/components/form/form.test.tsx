import React from 'react'
import type { RenderResult } from '@vtex/test-tools/react'
import { render } from '@vtex/test-tools/react'
import '@testing-library/jest-dom'

import type { Idado } from '../../interfaces'
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
    it('DEVE renderizar o título "Avaliação de Produto"', () => {
      const elemento = componente.getByText('Avaliação de Produto')

      expect(elemento).toBeInTheDocument()
    })
  })
})
