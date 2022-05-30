/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */

import  React, { useEffect, useState, FC } from 'react'
import { Alert } from 'vtex.styleguide'
import { useProduct } from 'vtex.product-context'

import 'tachyons'
import Form from './components/form'
import { validarCliente, validarNota } from './components/validacoes/validacao'
import { Idado } from './interfaces'

const RattingsReviews: FC = ({}) => {
  const productContextSku = useProduct()
  const data = new Date()
  const dataFormatada = `${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()}`

  const [rating, setRating] = useState(0)
  const [dado, setDado] = useState({
    Cliente:"",
    Produto: productContextSku?.product?.productId,
    Data: dataFormatada,
    Nota: 0,
    Comentario: ""} as Idado)

  const [showPopUp, setShowPopUp] = useState(false)
  const [mensagem, setMensagem] = useState({tipo:"", mensagem:""})
  const [mensagemErroValidacaoCliente, setMensagemErroValidacaoCliente] = useState("")
  const [mensagemErroValidacaoNota, setMensagemErroValidacaoNota] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if(validarCliente(dado.Cliente) && validarNota(dado.Nota)){
      setMensagemErroValidacaoCliente("")
      setMensagemErroValidacaoNota("")
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
      .then((result) => {console.log(result); enviado()})
      .catch((error) => { console.log("error", error); naoEnviado()})
    } else {

      if(validarCliente(dado.Cliente)){
        setMensagemErroValidacaoCliente("")
      }else{
        setMensagemErroValidacaoCliente("Este campo aceita apenas letras e espaços")
      }

      if(validarNota(dado.Nota)){
        setMensagemErroValidacaoNota("")
      }else{
        setMensagemErroValidacaoNota("É obrigatório preencher uma nota")
      }
    }
  }

  function enviado(){
    setDado({...dado, Cliente:"", Comentario:""})
    setRating(0)
    setMensagem({tipo:"success", mensagem:"Seus dados foram enviados com sucesso."})
    modalStatusEnvio()
  }

  function naoEnviado(){
    setMensagem({tipo:"error", mensagem:"Não foi possível enviar os dados, tente de novo."})
    modalStatusEnvio()
  }

  function modalStatusEnvio(){
    setShowPopUp(!showPopUp)
  }

  useEffect(()=>{
    setDado({...dado, Nota: rating})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[rating])

  // useEffect(()=>{
  //   if(validarCliente(dado.Cliente)){
  //     setMensagemErroValidacaoCliente("")
  //   }else{
  //     setMensagemErroValidacaoCliente("Este campo aceita apenas letras e espaços")
  //   }
  // },[dado.Cliente])


  useEffect(()=>{
    setDado({...dado, Produto: productContextSku?.product?.productId})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="w-30 ma5 center ba b--silver pa2">

    <Form
    handleDado = {dado}
    handleSetDado = {setDado}
    handleRating = {rating}
    handleSetRating = {setRating}
    handleOnClick = {handleSubmit}
    handleMensagemErroValidacaoCliente = {mensagemErroValidacaoCliente}
    handleMensagemErroValidacaoNota = {mensagemErroValidacaoNota}
    />

    {showPopUp ? <Alert type={mensagem.tipo} onClose={() => modalStatusEnvio()} autoClose="4000">
    {mensagem.mensagem}
    </Alert> : null }

    </div>
  )
}

export default RattingsReviews
