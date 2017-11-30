import React from 'react'

class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      signedIn: true
    }
  }

  render() {
    return (
      <ul className='nav-ul'>
        <li><a href='#menu'><button className='button'>Menu</button></a></li>
        <li><a href='#gallery'><button className='button'>Gallery</button></a></li>
        <li><a href='#location'><button className='button'>Location</button></a></li>
        <li><a href='#our-story'><button className='button'>Our Story</button></a></li>
        <div className='sign-in'>
          {
            this.state.signedIn
              ? <li><button className='button' onClick={handleEditMenuClick}>Edit Menu</button></li>
              : ""
          }
          <li><button className='button' onClick={handleSignInClick.bind(this)}>{this.state.signedIn?'Sign-in':'Sign-out'}</button></li>
        </div>
      </ul>
    )
  }
}

function handleEditMenuClick() {
  console.log('edit menu mode')
}

function handleSignInClick() {
  this.setState({ signedIn: !this.state.signedIn })
}

export default Nav
