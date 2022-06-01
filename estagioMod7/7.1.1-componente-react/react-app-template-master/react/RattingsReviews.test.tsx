import React from 'react'
import { render, RenderResult } from '@vtex/test-tools/react'
import '@testing-library/jest-dom'

import RattingsReviews from './RattingsReviews'

const mockDados = {
  tituloForm: 'Avaliação de Produto',
  labelBotao: 'Enviar avaliação',
}

describe('form', () => {
  let componente: RenderResult

  beforeEach(() => {
    componente = render(<RattingsReviews />)
  })

  describe('RattingsReviews', () => {
    it('DEVE renderizar o componente', () => {
      const elemento = componente.getByTestId('formulario')

      expect(elemento).toBeInTheDocument()
    })
    it('DEVE renderizar o título "Avaliação de Produto"', () => {
      const elemento = componente.getByText(mockDados.tituloForm)

      expect(elemento).toBeDefined()
    })
    it('DEVE renderizar o botão', () => {
      const botao = componente.getByTestId('botao_enviar')

      expect(botao).toBeDefined()
    })

    it('DEVE renderizar o texto do botão', () => {
      const botao = componente.getByTestId('botao_enviar')

      expect(botao.textContent).toContain(mockDados.labelBotao)
    })
  })
})
