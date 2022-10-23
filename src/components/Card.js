import React from 'react'

function Card({book}) {
  return (
    <div className='card'>
      <div className='card-image'><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /></div>
      <div className='card-title'><h3>{book.volumeInfo.title}</h3></div>
      <div className='card-body'>{book.volumeInfo.subtitle}</div>
      <div className='card-author'></div>
      <div className='card-action'></div>
    </div>
  )
}

export default Card