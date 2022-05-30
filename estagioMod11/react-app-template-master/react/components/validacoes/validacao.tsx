export function validarCliente(cliente: string) {
  const re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/

  if (!re.test(cliente)) {
    return false
  }

  return true
}

export function validarNota(nota: number) {
  const re = /^[1-5]+$/

  if (!re.test(nota.toString())) {
    return false
  }

  return true
}
