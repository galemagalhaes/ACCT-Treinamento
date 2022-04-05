import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

interface PropsStar {
  handleRating: number
  handleSetRating: (e: number) => void
}

const StarRattings = (props: PropsStar) => {
  const { handleRating, handleSetRating } = props
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
                handleSetRating(ratingValue)
              }}
            />

            <FaStar
              className="w2 h2 pointer"
              color={
                ratingValue <= (hover || handleRating) ? '#ef8216' : '#e4e5e9'
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })}
      <p className="f6 pl7 ma0">Sua nota é {handleRating}</p>
    </div>
  )
}

export default StarRattings
/**
 *const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className="center mb4">
      {[...Array(5)].map((star,i) => {
        const ratingValue = i + 1

        return (
          <label>
            <input
            type="radio"
            name="ratting"
            className="dn "
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
            />

            <FaStar
            className="w2 h2 pointer"
            color={ratingValue <= (hover || rating) ? "#8d479f" : "#e4e5e9"}

            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            />
            {console.log(star)}
          </label>
        )
      })}
      <p className="f6 pl7 ma0">Sua nota é {rating}</p>
    </div>
  )
 */
