import React from 'react'

function Card({book}) {
  return (
    <div className='card'>
      <div className='card-image'><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /></div>
      <h4 className='card-title'>{book.volumeInfo.title}</h4>
      {/* <div className='card-body'>{book.volumeInfo.subtitle}</div> */}
      <div className='card-author'>{book.volumeInfo.authors && book.volumeInfo.authors[0]}</div>
      <div className='card-action'></div>
    </div>
  )
}

export default Card