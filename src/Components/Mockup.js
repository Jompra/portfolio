import React, { useState } from 'react'

function Mockup(props) {
  return (
    <div className="mockup-display">
      <div className="screen">
        <img src={require('../Assets/imacMockup.png')} />
      </div>
      <div className="onscreen-image">
        <img src={props.image} />
      </div>
    </div>

  )
}

export default Mockup