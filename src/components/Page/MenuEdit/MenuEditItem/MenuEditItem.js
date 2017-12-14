import React from 'react'

class MenuEditItem extends React.Component {
  render() {
    var { title, description, price } = this.props.item

    return (
      <div className='menu-edit-item'>
        <div className='menu-edit-item-left'>
          <input className='title-input' type='text' value={title} onChange={(event) => this.props.handleMenuChange('title', event.target.value, this.props.idx)}  /><br/>
          <input className='description-input' type='text' value={description} onChange={(event) => this.props.handleMenuChange('description', event.target.value, this.props.idx)}  />
        </div>
        <div className='menu-edit-item-right'>
          <input className='price-input' type='text' value={price} onChange={(event) => this.props.handleMenuChange('price', event.target.value, this.props.idx)}  />
        </div>
      </div>
    )
  }
}

export default MenuEditItem
