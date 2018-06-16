import React from 'react'

import Sky from './Sky'
import Ground from './Ground'

const Canvas = () => {
  const viewBox = [
    window.innerWidth / 2,
    window.innerHeight - 100,
    window.innerWidth,
    window.innerHeight,
  ]

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="none"
      width={viewBox[2]}
      height={viewBox[3]}
    >
      <Sky />
      <Ground />
      <circle cx={viewBox[0]} cy={viewBox[1]} r={50} />
    </svg>
  )
}

export default Canvas
