import React from 'react'

class Nav extends React.Component {

  render() {
    return (
      <ul className='nav-ul'>
        <li><a href='#menu'><button className='button'>Menu</button></a></li>
        <li><a href='#gallery'><button className='button'>Gallery</button></a></li>
        <li><a href='#location'><button className='button'>Location</button></a></li>
        <li><a href='#our-story'><button className='button'>Our Story</button></a></li>
        <div className='sign-in'>
          {
            this.props.isLoggedIn
              ? <li><button className='button' onClick={this.props.handleChangeIsEdit.bind(this)}>Edit Menu</button></li>
              : ""
          }
          <li><button className='button' onClick={this.props.handleChangeIsLoggedIn.bind(this)}>{this.props.isLoggedIn?'Sign-out':'Sign-in'}</button></li>
        </div>
      </ul>
    )
  }
}


export default Nav
