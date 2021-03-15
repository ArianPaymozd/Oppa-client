import React, {useState} from 'react'
import {useTrail, useSpring, animated as a} from 'react-spring'
import './Goo.css'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%, -50%, 0)`

export default function Goo() {
  const [trail, set] = useTrail(3, () => ({ xy: [300, 300], config: i => (i === 0 ? fast : slow) }))
  const [color, setColor] = useState(false)
  const {background} = useSpring({
    from: {background: color ? '#83c6e6' : '#e36bae'},
    background: color ? '#e36bae' : '#83c6e6'
  })
  
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo" >
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="goo-main" onClick={() => setColor(!color)} onMouseMove={e => set({ xy: [ window.innerWidth > 1800 ? (e.pageX - ((window.innerWidth * .03) + ((window.innerWidth - 1800) / 2))) + 55 : e.pageX - (window.innerWidth * .03), window.innerWidth < 1400 ? e.pageY - (window.innerHeight * .35) : e.pageY - (window.innerHeight * .19)] })}>
        {trail.map((props, index) => (
          <a.div key={index} style={{ background, transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
    </>
  )
}