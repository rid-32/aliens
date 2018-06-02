import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'services/store'

import Application from 'ui/application'

import 'stylesheets/application'
import 'stylesheets/vars'

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
)
