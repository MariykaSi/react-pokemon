import React, { PureComponent } from 'react'

import './styles.scss'

class Header extends PureComponent {
  render () {
    return (
      <header>
        <div className='logo'>
          <a href='/'>Poké</a>
        </div>
      </header>
    )
  }
}

export default Header
