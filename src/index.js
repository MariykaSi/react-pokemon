import React from 'react'
import ReactDOM from 'react-dom'
import './styles/scss/global.scss'
import App from './pages/App'

import { Provider } from 'mobx-react'
import AppStore from './stores/AppStore'

const Root = (
  <Provider AppStore={AppStore}>
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('app'))
