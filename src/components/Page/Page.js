import React from 'react'
import Header from './Header/Header'
import Gallery from './Gallery/Gallery'
import Menu from './Menu/Menu'
import MenuEdit from './MenuEdit/MenuEdit'

import menuItems from '../../menu-data.js'

class Page extends React.Component {
  constructor() {
    super()
    this.state = {
      menuItems: menuItems,
      isEdit: false,
      isLoggedIn: false
    }
  }

  handleChangeIsEdit() {
    this.setState({ isEdit: !this.state.isEdit })
  }

  handleChangeIsLoggedIn() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }

  handleMenuChange(field, value, idx) {
    var newMenuItems = this.state.menuItems
    newMenuItems[idx][field] = value
    this.setState({ menuItems: newMenuItems })
  }

  render() {
    return (
      <div>
        { !this.state.isEdit
            ? (
              <div>
                <h1>Restaurant App Starter Template</h1>
                <Header
                  handleChangeIsEdit={this.handleChangeIsEdit.bind(this)}
                  handleChangeIsLoggedIn={this.handleChangeIsLoggedIn.bind(this)}
                  isLoggedIn={this.state.isLoggedIn}
                />
                <Gallery menuItems={this.state.menuItems}/>
                <Menu menuItems={this.state.menuItems}/>
              </div>
            ) : (
              <MenuEdit
                handleChangeIsEdit={this.handleChangeIsEdit.bind(this)}
                handleMenuChange={this.handleMenuChange.bind(this)}
                menuItems={this.state.menuItems}
              />
            )
        }

      </div>
    )
  }
}

export default Page;
