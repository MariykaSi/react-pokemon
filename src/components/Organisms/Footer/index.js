import React, { PureComponent } from 'react'

import './styles.scss'

class Footer extends PureComponent {
  render () {
    return (
      <footer className='footer'>
        <div className='copyright'>
          <p>
            Copyright @ 2019 <span className='span'>Poké</span>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
