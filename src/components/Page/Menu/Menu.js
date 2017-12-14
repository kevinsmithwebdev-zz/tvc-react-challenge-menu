import React from 'react'

import MenuItem from './MenuItem/MenuItem'

const Menu = ({ menuItems }) => {
  let renderItems = menuItems.map((item, i) => (
    <MenuItem
      key={i}
      title={item.title}
      description={item.description}
      price={item.price}
    />
  ))

  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      {renderItems}
    </div>
  )
}

export default Menu
