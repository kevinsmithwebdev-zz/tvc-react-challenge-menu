import React from 'react'

import iVegies from '../../../images/vegies-left.jpg'

import Nav from './Nav/Nav'

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-left'>
          <img className='img-responsive' src={iVegies} alt='fresh vegies'/>
        </div>
        <div className='header-right'>
          <div className='header-titles'>
            <h1>Wholesome Foods</h1>
            <h2>Delicious meals made with locally sourced organic ingredients.</h2>
          </div>
          <Nav
            handleChangeIsEdit={this.props.handleChangeIsEdit}
            handleChangeIsLoggedIn={this.props.handleChangeIsLoggedIn}
            isLoggedIn={this.props.isLoggedIn}
          />
        </div>
      </div>
    )
  }
}

export default Header
