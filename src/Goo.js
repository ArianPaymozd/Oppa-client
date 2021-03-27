import React, {useState} from 'react'
import {useTrail, useSpring, animated as a} from 'react-spring'
import './Goo.css'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%, -50%, 0)`

export default function Goo() {
  const [trail, set] = useTrail(3, () => ({ xy: window.innerWidth < 1333 ? [(window.innerWidth * .45) / 2, (window.innerWidth * .45) / 2] : [300, 300], config: i => (i === 0 ? fast : slow) }))
  const [color, setColor] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setleft] = useState(0)
  const {background} = useSpring({
    from: {background: color ? '#83c6e6' : '#e36bae'},
    background: color ? '#e36bae' : '#83c6e6'
  })
  
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo" >
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values={`1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 80 -7`} />
        </filter>
      </svg>
      <div className="goo-main" onClick={() => setColor(!color)} onMouseLeave={e => set({xy: window.innerWidth < 1333 ? [(window.innerWidth * .45) / 2, (window.innerWidth * .45) / 2] : [300, 300]})} onMouseEnter={e => {setTop(e.target.getClientRects()[0].top); setleft(e.target.getClientRects()[0].left)}} onMouseDown={e => console.log(e.target.getClientRects(), e.pageY, window.pageYOffset)} onMouseMove={e => set({ xy: [ e.pageX - left, e.pageY - top - window.pageYOffset] })}>
        {trail.map((props, index) => (
          <a.div key={index} style={{ background, transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
    </>
  )
}