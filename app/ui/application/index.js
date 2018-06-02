import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Page from 'ui/page'

class Application extends Component {
  render() {
    return <Page />
  }
}

export default hot(module)(Application)
