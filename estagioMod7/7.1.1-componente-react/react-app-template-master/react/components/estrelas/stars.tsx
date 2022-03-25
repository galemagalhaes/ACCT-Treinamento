import React from 'react'
import { FaStar } from 'react-icons/fa'

const StarRattings = () => {
  return (
    <div>
      <label>
        <input type="radio" name="ratting" className="dn" />
        <FaStar className="w2 h2" />
      </label>
    </div>
  )
}

export default StarRattings
