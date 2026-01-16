import React from 'react'
import Wave from 'react-wavify'

function AnimatedWave() {
  return (
    <div className="wave-container absolute bottom-0 left-0 right-0"  style={{ color: '#DADADD' /* some purple color or any */ }}>
      <Wave fill='currentColor'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 30,
          amplitude: 40,
          speed: 0.18,
          points: 8
        }}
      />
    </div>
  )
}

export default AnimatedWave