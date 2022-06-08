import { createContext, useState, useContext, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'
import { useQuery } from 'react-apollo'
import CONSULT_DATA from '../graphql/getData.graphql'

const RattingsReviewsContext = createContext(null)

const RattingsReviewsProvider = ({ children }) => {
  const [dataF, setDataF] = useState([])
  const productSku = useProduct()


  const { data } = useQuery(CONSULT_DATA, {
    variables: {
      acronym: "AG",
      account: "acctglobal",
      schema: "formulario",
      fields: [
        "Cliente",
        "Nota",
        "Data",
        "Produto",
        "Comentario"
      ]
    }
  })

  useEffect(() => {
    data && formatData()
  }, [data])

  const formatData = () => {
    const extractData = data?.documents?.map((document) =>
    document.fields.reduce((initial, current) => ({
      ...initial, [current.key]: current.value
    }), {})
    )
    setDataF(extractData)
  }

  return (
    <RattingsReviewsContext.Provider value={{ dataF }}>
      { children }
    </RattingsReviewsContext.Provider>
  )
}
export const useRattingsReviewsContext = () => useContext(RattingsReviewsContext);
export default RattingsReviewsProvider

