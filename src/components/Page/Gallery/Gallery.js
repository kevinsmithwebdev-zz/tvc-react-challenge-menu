import React from 'react'

import GalleryItem from './GalleryItem/GalleryItem'
import menuItems from '../../../menu-data.js'

const Gallery = () => {
  let renderItems = menuItems.map((item, i) => (
    <GalleryItem
      key={i}
      image={item.image}
      title={item.title}
      description={item.description}
      price={item.price}
    />
  ))

  return (
    <div className='gallery'>
      <h2>Our Fresh Meals</h2>
      <div className='gallery-items'>
        {renderItems}
      </div>
    </div>
  )
}

export default Gallery
