import React from 'react'

const GalleryItem = ( { image, title, description, price }) => {

  return (
    <div className='gallery-item'>
      <img className='gallery-item-image img-responsive' src={image}  alt={title}/>
      <div className='gallery-item-title'>{title}</div>
      <div className='gallery-item-description'>{description}</div>
      <div id='gallery-item-price'>{price}</div>
    </div>
  )
}

export default GalleryItem
