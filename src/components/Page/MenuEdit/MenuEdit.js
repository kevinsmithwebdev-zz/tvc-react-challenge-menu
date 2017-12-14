import React from 'react'
import MenuEditItem from './MenuEditItem/MenuEditItem'

class MenuEdit extends React.Component {

  render() {
    const renderItem = (item, i) => (
      <MenuEditItem
        key={i}
        idx={i}
        item={item}
        handleMenuChange={this.props.handleMenuChange}
      />
    )
    return (
      <div>
        <div className='menu-edit'>
          <h2>Our Menu</h2>
            {this.props.menuItems.map((item, i) => renderItem(item, i))}
          <button className='button menu-edit-done'
            onClick={this.props.handleChangeIsEdit}
          >
            Done
          </button>
        </div>
      </div>
    )
  }
}

//onClick={props.handleEditMenuClick}
export default MenuEdit
