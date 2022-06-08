import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

interface PropsStar {
  handleStar: number
  errorMessage?: string
  handleSetStar: (e: number) => void
}

const StarRattings = (props: PropsStar) => {
  const { handleStar, handleSetStar, errorMessage } = props
  const contador = [1, 2, 3, 4, 5]
  const [hover, setHover] = useState(0)

  return (
    <div className="center mb4">
      {contador.map((index) => {
        const ratingValue = index

        return (
          <label key={index}>
            <input
              type="radio"
              name="ratting"
              className="dn "
              value={ratingValue}
              onClick={() => {
                handleSetStar(ratingValue)
              }}
            />

            <FaStar
              className="w2 h2 pointer mt4"
              color={
                ratingValue <= (hover || handleStar) ? '#ef8216' : '#e4e5e9'
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })}
      <p className="f6 pl7 ma0">Sua nota é {handleStar}</p>
      <span>{errorMessage}</span>
    </div>
  )
}

export default StarRattings
