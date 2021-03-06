import { useState } from 'react'
import {useSpring, animated} from 'react-spring'
import './Bubble.css'

export default function Bubble(props) {
    const [popped, setPopped] = useState(false)
    const [style, set] = useSpring(() => ({
      opacity: 1,
      height: '50px',
      left: 0,
      top: '50%'
    }))
    const onScroll = (height) => {
      if (height >= window.innerHeight * .3 - 5) {
        setPopped(true)
      } else if (popped === true) {
        setPopped(false)
      }
      popped ? set({height: `${window.innerHeight * 3}px`, left: -window.innerHeight * 1.5, top: `${window.innerHeight / 4.6}%`}) : set({height: `${height}px`, left: 0, top: '50%'})
    }
    return (
        <div style={{height: window.innerHeight}} className='scroll-bubble'>
          <div className='bubble-container'>
        <animated.svg style={style} className='worksheet-bubble' xmlns="http://www.w3.org/2000/animated.svg" viewBox="0 0 216 216"><g id="drops">
            
            <g>
              <g>
                <circle cx="108" cy="9" r="9" fill="#90d8f8"/>
                <polyline points="108 36 117 9 99 9" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="54" cy="27" r="9" fill="#90d8f8"/>
                <polyline points="67.5 50.38 61.8 22.5 46.21 31.5" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="18" cy="72" r="9" fill="#90d8f8"/>
                <polyline points="41.38 85.5 22.5 64.21 13.5 79.8" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="27" cy="162" r="9" fill="#90d8f8"/>
                <polyline points="50.38 148.5 22.5 154.2 31.5 169.79" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="9" cy="117" r="9" fill="#90d8f8"/>
                <polyline points="36 117 9 108 9 126" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="58.5" cy="194.38" r="9" fill="#90d8f8"/>
                <polyline points="72 171 50.71 189.88 66.29 198.88" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="162" cy="27" r="9" fill="#90d8f8"/>
                <polyline points="148.5 50.38 169.79 31.5 154.21 22.5" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="198" cy="72" r="9" fill="#90d8f8"/>
                <polyline points="174.62 85.5 202.5 79.8 193.5 64.21" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="207" cy="117" r="9" fill="#90d8f8"/>
                <polyline points="180 117 207 126 207 108" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="189" cy="162" r="9" fill="#90d8f8"/>
                <polyline points="165.62 148.5 184.5 169.79 193.5 154.2" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="157.5" cy="194.38" r="9" fill="#90d8f8"/>
                <polyline points="144 171 149.71 198.88 165.29 189.88" fill="#90d8f8"/>
              </g>
              <g>
                <circle cx="108" cy="207" r="9" fill="#90d8f8"/>
                <polyline points="108 180 99 207 117 207" fill="#90d8f8"/>
              </g>
            </g>
          </g></animated.svg>
        <animated.svg onClick={() => setPopped(!popped)} style={style} className='worksheet-bubble' xmlns="http://www.w3.org/2000/animated.svg" viewBox="0 0 216 216">
          <g id="bubble">
            <g>
              <g>
                <path d="M363.84,266.16A108,108,0,0,1,212.16,417.84,108,108,0,1,0,363.84,266.16Z" transform="translate(-189 -243)" fill="#66cef6"/>
                <path d="M387,333a107.57,107.57,0,0,0-23.16-66.84A108,108,0,0,0,212.16,417.84,108,108,0,0,0,387,333Z" transform="translate(-189 -243)" fill="#91d9f8"/>
              </g>
              <path d="M209,351a88.1,88.1,0,0,1,88-88" transform="translate(-189 -243)" fill="#90d8f8" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"/>
            </g>
          </g>
        </animated.svg>
        </div>
        <div className='bubble-p' onScroll={e => {onScroll(((e.target.scrollTop + e.target.getClientRects()[0].height) / e.target.scrollHeight) * (window.innerHeight * .3))}}>
          <p>{props.reading}</p>
        </div>
        </div>
    )
}