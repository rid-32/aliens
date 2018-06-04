import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Canvas from './Canvas'

class Application extends Component {
  render() {
    return <Canvas />
  }
}

export default hot(module)(Application)
