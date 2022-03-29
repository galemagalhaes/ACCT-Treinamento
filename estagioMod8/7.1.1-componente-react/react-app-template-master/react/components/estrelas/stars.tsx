import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRattings = () => {
  const [rating, setRating] = useState(0)
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
}

export default StarRattings
