import React from 'react'

function Card({description, title, price}) {
  return (
    <div className='card'>
        <h2 className='title'>{title}</h2>
        <p className='description'>{description}</p>
        <p className='price'>₹{price}</p>
    </div>
  )
}

export default Card