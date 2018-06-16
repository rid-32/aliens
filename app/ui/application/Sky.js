import React from 'react'

import { maxWidth as skyWidth } from 'constants/application'

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  }
  const gameHeight = 1200
  return (
    <rect style={skyStyle} x={0} y={0} width={skyWidth} height={gameHeight} />
  )
}

export default Sky
