import React from 'react'

import { maxWidth as groundWidth } from 'constants/application'

const Ground = () => {
  const groundStyle = {
    fill: '#59a941',
  }
  const division = {
    stroke: '#458232',
    strokeWidth: '3px',
  }

  const groundHeight = 100

  return (
    <g id="ground">
      <rect
        id="ground-2"
        style={groundStyle}
        x={0}
        y={window.innerHeight - groundHeight}
        width={groundWidth}
        height={groundHeight}
      />
      <line
        x1={0}
        y1={window.innerHeight - groundHeight}
        x2={groundWidth}
        y2={window.innerHeight - groundHeight}
        {...division}
      />
    </g>
  )
}

export default Ground
