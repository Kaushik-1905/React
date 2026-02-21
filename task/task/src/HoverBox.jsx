import React, { useState } from 'react'

const HoverBox = () => {

  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: hovered ? 'pink' : 'white',
        transition: '0.3s',
        padding:'48px',
        margin:'100px 350px'
      }}
    ></div>
  )
}

export default HoverBox
