import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import './VineClimb.css'

export default function VineClimb(props) {
  const [style, set] = useSpring(() => ({
    transform: `translate(0,0)`
  }))
  const onScroll = (y) => set({transform: `translate(0,${y}%)`})
  return (
    <div>
    <div className='vine'>
    <svg style={{width: 200}} className='VineClimb' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.18 796.98">
    <a.g transform={style.transform} id="monster-behind">
      <rect x="43.34" y="161.33" width="35.67" height="19.82" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <polygon points="43.34 181.15 30.12 181.15 29.63 157.83 42.84 157.83 43.34 181.15" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <polyline points="79 116.17 79 119.93 50.27 119.93 50.27 117.62" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <rect x="41.9" y="118.53" width="8.37" height="5.18" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <polygon points="41.82 123.7 36.9 123.7 36.98 118.53 41.9 118.54 41.82 123.7" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <polygon points="39.93 117.96 36.9 117.96 36.98 112.79 40.02 112.79 39.93 117.96" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <polygon points="39.93 111.71 36.9 111.81 36.98 106.65 39.93 106.55 39.93 111.71" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <polygon points="39.93 105.67 36.9 105.67 36.98 100.51 39.93 100.51 39.93 105.67" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
    </a.g>
    <g id="leaves">
      <g>
        <g>
          <path d="M271.3,262.7c-2.1,4-13.7,2.2-13.7,2.2s-9.1-1-14.6,9.6-4,15-4,15,8-1.4,12.8-1.9c6.7-.6,14.1-4.7,16.6-10.8C270.4,272,271.3,262.7,271.3,262.7Z" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M239.1,289.5c-.4.3,4.8-8,12.3-12.6,4.7-2.9,10.7-3.7,13.9-5.3,4.4-2.1,6.1-8.9,6.1-8.9" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
        <g>
          <path d="M267.8,264.9a2.18,2.18,0,0,0-.8,2.4c.3.8,1.4,1.1,2.4.3-.8,1.5-1,2.7-.6,3s1-.1,1.6-.7" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M264.6,265.3a4,4,0,0,0-.7,3.6,2.44,2.44,0,0,0,2.8,1.8,2.81,2.81,0,0,0-.1,2.8c.6.9,2.1.8,3-.4" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M261.3,265.2a6.06,6.06,0,0,0-1,3.9,3.61,3.61,0,0,0,3.1,3.2c0,.2-.5,2.5.8,3.9a3.21,3.21,0,0,0,4.4.3" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M257.6,264.9A6.19,6.19,0,0,0,256,270a3.85,3.85,0,0,0,3.6,3.5c-.1.2-1.2,3.3.1,5.8a4.44,4.44,0,0,0,5.9,1.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M253.1,265.5a8.44,8.44,0,0,0-.9,4.9,5.14,5.14,0,0,0,3.9,4.3,9.07,9.07,0,0,0-.4,6.2,5.79,5.79,0,0,0,4.9,4.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M248.2,268c-.1.3-1.6,2.7-.9,5.2a4.38,4.38,0,0,0,4.5,3.4,9.31,9.31,0,0,0-.5,5.9,5.61,5.61,0,0,0,5,4.3" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M243.3,274a5.82,5.82,0,0,0,.3,3.8,3.55,3.55,0,0,0,4.4,1.5,6.66,6.66,0,0,0-.7,5.8,3.83,3.83,0,0,0,4,2.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M240.9,279.3a3.29,3.29,0,0,0,.2,3.7,2.09,2.09,0,0,0,2.7.4,4,4,0,0,0-.8,3.7,2.36,2.36,0,0,0,3.4,1.3" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M239.3,284.7a2,2,0,0,0,.3,1.9c.5.5,1.6.2,2.1-.8a2,2,0,0,0-.7,2.3,1.26,1.26,0,0,0,1.8.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M244.8,743.5c0,4.7-10.9,9.5-10.9,9.5s-8.4,4.1-8.3,16.4,3.3,15.2,3.3,15.2,6.3-5.6,10.2-8.7c5.5-4.3,10.1-11.9,9.5-18.5C248.2,752.1,244.8,743.5,244.8,743.5Z" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M229,784.6c-.2.5.5-9.6,4.9-17.8,2.8-5.1,7.6-9.2,9.6-12.3,2.8-4.3,1.3-11.1,1.3-11.1" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
        <g>
          <path d="M242.7,747.4a2.15,2.15,0,0,0,.4,2.5,1.48,1.48,0,0,0,2.2-1c-.1,1.7.4,2.9.9,2.9s.8-.6,1.1-1.5" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M240.1,749.4a4.22,4.22,0,0,0,1,3.5,2.23,2.23,0,0,0,3.2,0,2.66,2.66,0,0,0,1.2,2.5c.9.4,2.2-.4,2.4-2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M237.3,751.2a6,6,0,0,0,.9,4,3.08,3.08,0,0,0,4.1,1c.1.2.7,2.4,2.4,3,1.5.5,3.1-.4,3.9-2.2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M233.9,753a6.38,6.38,0,0,0,.9,5.3,3.42,3.42,0,0,0,4.7,1c0,.3.4,3.6,2.8,5,1.9,1.2,4.4.5,5.9-1.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M230.2,756a8.29,8.29,0,0,0,1.5,4.7,4.6,4.6,0,0,0,5.3,1.6,8.85,8.85,0,0,0,2.4,5.6,5.26,5.26,0,0,0,6.1.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M227.2,760.9c0,.3-.1,3.2,1.6,5a3.91,3.91,0,0,0,5.4.5,8.85,8.85,0,0,0,2.2,5.4,4.89,4.89,0,0,0,6.2.9" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M225.7,768.8a5.16,5.16,0,0,0,2,3.1c1.4.9,3.2.4,4.5-1.1a6.32,6.32,0,0,0,2,5.4,3.76,3.76,0,0,0,4.7.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M225.9,774.7a3.27,3.27,0,0,0,1.8,3.1,2.14,2.14,0,0,0,2.5-1.1,4,4,0,0,0,1,3.7,2.3,2.3,0,0,0,3.5-.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M227,780.4a1.68,1.68,0,0,0,1.1,1.5c.7.1,1.4-.7,1.5-1.8a2.32,2.32,0,0,0,.4,2.4,1.24,1.24,0,0,0,2-.3" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M299.2,530.3c-4-1.6-4.3-14.6-4.3-14.6a17.24,17.24,0,0,0-11.1-14.2c-10.5-4.1-14-1.7-14-1.7s2.6,8.5,3.9,13.6c1.7,7.2,6.6,14.6,12.4,16.2C290.7,530.9,299.2,530.3,299.2,530.3Z" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M269.8,499.8A38.5,38.5,0,0,1,283.2,511c3.4,4.6,5.2,11.1,7.1,14.3,2.7,4.4,9,5.1,9,5.1" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
        <g>
          <path d="M296.6,526.8a1.93,1.93,0,0,0-2.3-.5,1.71,1.71,0,0,0,.1,2.6c-1.4-.6-2.6-.6-2.8-.1s.3,1,.9,1.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M295.8,523.4a3,3,0,0,0-3.3-.1,2.8,2.8,0,0,0-1.1,3.3,2,2,0,0,0-2.5.4c-.7.8-.4,2.4.9,3.3" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M295.2,519.8a4.86,4.86,0,0,0-3.7-.5,3.94,3.94,0,0,0-2.3,4,4.06,4.06,0,0,0-3.4,1.5,4.28,4.28,0,0,0,.5,4.9" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M294.9,515.7a4.78,4.78,0,0,0-4.8-.9,4.17,4.17,0,0,0-2.5,4.6,5.14,5.14,0,0,0-5.7,8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M293.6,510.8a6.36,6.36,0,0,0-4.5-.1,5.48,5.48,0,0,0-3.2,5,7.34,7.34,0,0,0-5.6.6c-3.1,2-2.8,5.9-2.8,6.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M290.5,506a5.94,5.94,0,0,0-4.8-.1,5,5,0,0,0-2.2,5.5,7.2,7.2,0,0,0-5.3.4,6.16,6.16,0,0,0-2.9,6.2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M284.3,501.7a4.43,4.43,0,0,0-3.3,1,4.32,4.32,0,0,0-.6,5,5,5,0,0,0-5.3.2,4.52,4.52,0,0,0-1.6,4.9" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M279.2,500a2.69,2.69,0,0,0-3.2.8,2.73,2.73,0,0,0,.1,3,3.2,3.2,0,0,0-3.5-.2,2.88,2.88,0,0,0-.5,3.9" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M274.1,499.1a1.44,1.44,0,0,0-1.6.6,1.86,1.86,0,0,0,1,2.2,1.73,1.73,0,0,0-2.1-.4,1.46,1.46,0,0,0-.4,2.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M266.5,670.8c-1.4,4.4-13.2,4.8-13.2,4.8s-9.1.7-12.8,12.3-1.6,15.6-1.6,15.6,7.6-2.9,12.3-4.3c6.5-1.9,13.2-7.3,14.6-13.8C267,680.2,266.5,670.8,266.5,670.8Z" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M238.9,703.5A42.42,42.42,0,0,1,249,688.7c4.2-3.8,10-5.8,12.9-7.9,4-3,4.6-9.9,4.6-9.9" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
        <g>
          <path d="M263.3,673.7a2.2,2.2,0,0,0-.4,2.5c.4.8,1.6.8,2.4-.2-.6,1.6-.5,2.8-.1,3.1s.9-.3,1.5-1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M260.3,674.7a4,4,0,0,0-.1,3.7,2.41,2.41,0,0,0,3,1.3,2.94,2.94,0,0,0,.3,2.8c.8.7,2.2.4,2.9-1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M257,675.3a6,6,0,0,0-.4,4.1,3.27,3.27,0,0,0,3.6,2.5c0,.2-.1,2.5,1.4,3.7,1.2,1,3,.8,4.4-.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M253.3,675.6a6.52,6.52,0,0,0-.8,5.4,3.67,3.67,0,0,0,4.1,2.8c0,.2-.7,3.5,1.1,5.7a4.37,4.37,0,0,0,6.1.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M248.9,677.1a8.47,8.47,0,0,0-.1,5,4.87,4.87,0,0,0,4.5,3.5,10,10,0,0,0,.5,6.2,5.43,5.43,0,0,0,5.5,3.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M244.6,680.5a7.76,7.76,0,0,0-.1,5.3,4.21,4.21,0,0,0,4.9,2.5,9.57,9.57,0,0,0,.4,5.9,5.32,5.32,0,0,0,5.6,3.2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M240.7,687.4a5.39,5.39,0,0,0,.9,3.6,3.48,3.48,0,0,0,4.6.6,6.23,6.23,0,0,0,.2,5.8,3.82,3.82,0,0,0,4.4,1.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M239.1,693a3.44,3.44,0,0,0,.8,3.6,2.12,2.12,0,0,0,2.7-.1,4,4,0,0,0-.2,3.8,2.23,2.23,0,0,0,3.5.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M238.4,698.7a1.77,1.77,0,0,0,.6,1.8c.6.4,1.6-.1,2-1.2a2.35,2.35,0,0,0-.4,2.4,1.21,1.21,0,0,0,1.9.5" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M282.9,188.3c-2.4,3.8-13.8.8-13.8.8s-9-1.9-15.3,8.2-5.1,14.6-5.1,14.6,8-.6,12.9-.6c6.7,0,14.4-3.3,17.4-9.1C281.2,197.6,282.9,188.3,282.9,188.3Z" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M248.7,211.9a38.94,38.94,0,0,1,13.2-11.4c4.9-2.4,11-2.7,14.3-3.9,4.5-1.7,6.8-8.3,6.8-8.3" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
        <g>
          <path d="M279.2,190.2a2.28,2.28,0,0,0-1,2.3c.2.9,1.3,1.3,2.3.5-.9,1.4-1.1,2.6-.8,2.9s1,0,1.6-.5" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M276,190.2a4,4,0,0,0-1,3.5,2.49,2.49,0,0,0,2.6,2.1,2.88,2.88,0,0,0-.3,2.8c.5.9,2,1,3-.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M272.8,189.9a5.73,5.73,0,0,0-1.4,3.8,3.65,3.65,0,0,0,2.9,3.5c0,.2-.7,2.4.5,4a3.32,3.32,0,0,0,4.4.7" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M269.1,189.2a5.79,5.79,0,0,0-2,4.9,4.08,4.08,0,0,0,3.4,3.9c-.1.2-1.5,3.2-.3,5.8a4.34,4.34,0,0,0,5.7,2.3" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M264.5,189.3a7.31,7.31,0,0,0-1.2,4.8,5.25,5.25,0,0,0,3.5,4.7,9.38,9.38,0,0,0-.9,6.1,5.91,5.91,0,0,0,4.6,4.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M259.5,191.4a6.87,6.87,0,0,0-1.3,5.1,4.38,4.38,0,0,0,4.2,3.8,8.66,8.66,0,0,0-1,5.8,5.75,5.75,0,0,0,4.6,4.7" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M254.1,196.9a5.73,5.73,0,0,0,0,3.8,3.51,3.51,0,0,0,4.3,1.9,6.61,6.61,0,0,0-1.2,5.7,3.91,3.91,0,0,0,3.8,3" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M251.3,201.9a3.33,3.33,0,0,0-.1,3.7,2.15,2.15,0,0,0,2.6.7,3.63,3.63,0,0,0-1,3.6,2.39,2.39,0,0,0,3.3,1.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M249.2,207.2a2.06,2.06,0,0,0,.1,1.9c.5.5,1.5.4,2.2-.6a2.1,2.1,0,0,0-.9,2.2,1.36,1.36,0,0,0,1.8,1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M205.8,608.4c4.2,0,8.6,12.1,8.6,12.1a15.77,15.77,0,0,0,14.8,9.2c11.1-.1,13.7-3.7,13.7-3.7s-5.1-7-7.8-11.3c-3.9-6.1-10.7-11.2-16.7-10.5C213.6,604.6,205.8,608.4,205.8,608.4Z" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M242.9,626c.4.2-8.7-.6-16-5.5-4.6-3.1-8.3-8.5-11.1-10.7-3.9-3.1-10-1.4-10-1.4" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
        <g>
          <path d="M209.3,610.8a1.88,1.88,0,0,0,2.3-.4,1.68,1.68,0,0,0-.9-2.4c1.5.1,2.6-.4,2.6-.9s-.6-.9-1.3-1.2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M211.2,613.6a3.48,3.48,0,0,0,3.2-1.1,2.85,2.85,0,0,0,0-3.5,2.18,2.18,0,0,0,2.2-1.3,2.2,2.2,0,0,0-1.8-2.7" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M212.8,616.7a4.82,4.82,0,0,0,3.6-1,3.94,3.94,0,0,0,.9-4.6,3.81,3.81,0,0,0,.7-7.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M214.3,620.5a4.87,4.87,0,0,0,4.8-1,4.54,4.54,0,0,0,.9-5.3,6.21,6.21,0,0,0,4.5-3.1,5.7,5.7,0,0,0-1.6-6.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M217.1,624.6a5.91,5.91,0,0,0,4.2-1.6,5.6,5.6,0,0,0,1.4-5.9,7.19,7.19,0,0,0,5.1-2.7c2.4-3,.8-6.7.8-6.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M221.5,628a5.49,5.49,0,0,0,4.5-1.8,5.09,5.09,0,0,0,.4-6,7.22,7.22,0,0,0,4.9-2.4,6.41,6.41,0,0,0,.8-6.9" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M228.7,629.7a4.67,4.67,0,0,0,2.8-2.2,4.35,4.35,0,0,0-1-5,5.25,5.25,0,0,0,4.9-2.2,4.69,4.69,0,0,0,.1-5.2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M233.9,629.3a2.82,2.82,0,0,0,2.8-2,2.62,2.62,0,0,0-1-2.8,3.15,3.15,0,0,0,3.3-1.2,2.88,2.88,0,0,0-.7-3.9" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M239,628.2a1.49,1.49,0,0,0,1.3-1.2,1.65,1.65,0,0,0-1.6-1.7,1.69,1.69,0,0,0,2.1-.4,1.59,1.59,0,0,0-.3-2.2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M262,391c-1.4,4.4-13.2,4.8-13.2,4.8s-9.1.7-12.8,12.3-1.6,15.6-1.6,15.6,7.6-2.9,12.3-4.3c6.5-1.9,13.2-7.3,14.6-13.8C262.6,400.4,262,391,262,391Z" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M234.5,423.6a42.42,42.42,0,0,1,10.1-14.8c4.2-3.8,10-5.8,12.9-7.9,4-3,4.6-9.9,4.6-9.9" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
        <g>
          <path d="M258.8,393.8a2.2,2.2,0,0,0-.4,2.5c.4.8,1.6.8,2.4-.2-.6,1.6-.5,2.8-.1,3.1s.9-.3,1.5-1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M255.8,394.8a4,4,0,0,0-.1,3.7,2.41,2.41,0,0,0,3,1.3,2.94,2.94,0,0,0,.3,2.8c.8.7,2.2.4,2.9-1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M252.6,395.4a6,6,0,0,0-.4,4.1,3.27,3.27,0,0,0,3.6,2.5c0,.2-.1,2.5,1.4,3.7,1.2,1,3,.8,4.4-.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M248.9,395.7a6.52,6.52,0,0,0-.8,5.4,3.67,3.67,0,0,0,4.1,2.8,7.21,7.21,0,0,0,1.1,5.7c1.5,1.8,3.9,2.1,6.1.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M244.5,397.2a8.47,8.47,0,0,0-.1,5,4.87,4.87,0,0,0,4.5,3.5,10,10,0,0,0,.5,6.2,5.61,5.61,0,0,0,5.5,3.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M240.1,400.6a7.76,7.76,0,0,0-.1,5.3,4.21,4.21,0,0,0,4.9,2.5,9.57,9.57,0,0,0,.4,5.9,5.32,5.32,0,0,0,5.6,3.2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M236.2,407.5a5.3,5.3,0,0,0,.9,3.6,3.38,3.38,0,0,0,4.6.6,6.23,6.23,0,0,0,.2,5.8,3.7,3.7,0,0,0,4.4,1.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M234.6,413.1a3.44,3.44,0,0,0,.8,3.6,2.12,2.12,0,0,0,2.7-.1,4,4,0,0,0-.2,3.8,2.23,2.23,0,0,0,3.5.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M233.9,418.8a1.77,1.77,0,0,0,.6,1.8c.6.4,1.6-.1,2-1.1a2.32,2.32,0,0,0-.4,2.4,1.21,1.21,0,0,0,1.9.5" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M199,323.4c4-1.6,11.8,8.1,11.8,8.1s6.4,7.3,16.7,3,11.8-8.7,11.8-8.7-6.9-4.6-10.8-7.7c-5.5-4.3-13.5-6.5-18.9-3.6C205.2,316.9,199,323.4,199,323.4Z" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M239.3,325.9a34,34,0,0,1-16.7.9c-5.3-1.1-10.4-4.8-13.7-5.9-4.6-1.5-9.8,2.5-9.8,2.5" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
        <g>
          <path d="M203,324.3a1.92,1.92,0,0,0,2-1.2,1.55,1.55,0,0,0-1.6-1.9c1.5-.5,2.3-1.4,2.2-1.9s-.8-.6-1.6-.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M205.7,326.3a3.38,3.38,0,0,0,2.6-2.3,3,3,0,0,0-1.1-3.4,2.43,2.43,0,0,0,1.7-2.1,2.14,2.14,0,0,0-2.6-1.9" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M208.2,328.6a4.78,4.78,0,0,0,3.1-2.3,4.1,4.1,0,0,0-.6-4.7,4.74,4.74,0,0,0,1.7-3.5,3.72,3.72,0,0,0-3.2-3.4" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M210.8,331.6a5,5,0,0,0,4.2-2.8,4.68,4.68,0,0,0-.7-5.3,6.87,6.87,0,0,0,3.3-4.6,5.29,5.29,0,0,0-3.5-5.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M214.6,334.4a7.19,7.19,0,0,0,3.5-3.1,6.05,6.05,0,0,0-.4-6.1,8.07,8.07,0,0,0,3.9-4.4,6.87,6.87,0,0,0-1.4-6.7" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M219.8,335.9a6.14,6.14,0,0,0,3.7-3.4,5,5,0,0,0-1.5-5.8,8.27,8.27,0,0,0,3.8-4.1,6.49,6.49,0,0,0-1.3-6.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M227.1,334.7a4.63,4.63,0,0,0,1.9-3.1,4,4,0,0,0-2.5-4.3,5.49,5.49,0,0,0,3.9-3.9,4.65,4.65,0,0,0-1.5-4.9" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M231.9,332.4a3.09,3.09,0,0,0,2-2.9,2.58,2.58,0,0,0-1.8-2.2,3.24,3.24,0,0,0,2.7-2.3,2.8,2.8,0,0,0-1.9-3.4" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M236.4,329.4a2.06,2.06,0,0,0,.9-1.6,1.46,1.46,0,0,0-2.1-.9,2,2,0,0,0,1.9-1.2,1.55,1.55,0,0,0-.9-2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M293.5,59.7c-.7,4.6-12.2,7.2-12.2,7.2s-8.9,2.5-10.7,14.6.9,15.6.9,15.6,7.1-4.3,11.4-6.6c6.1-3.2,11.8-9.8,12.3-16.4C295.5,68.8,293.5,59.7,293.5,59.7Z" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M271.5,97.2a44.66,44.66,0,0,1,7.6-16.5c3.5-4.5,8.9-7.6,11.4-10.2,3.4-3.7,3-10.7,3-10.7" transform="translate(-197.05 -26.19)" fill="#50a968" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
        <g>
          <path d="M290.8,63.1a2.43,2.43,0,0,0,0,2.6c.5.7,1.7.5,2.3-.6-.3,1.7-.1,2.9.4,3s.9-.5,1.3-1.2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M288,64.7a4.32,4.32,0,0,0,.5,3.7,2.28,2.28,0,0,0,3.1.7,2.74,2.74,0,0,0,.8,2.7c.9.6,2.2,0,2.7-1.5" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M284.9,65.9a5.75,5.75,0,0,0,.2,4.1,3.16,3.16,0,0,0,3.9,1.8c0,.2.3,2.5,1.9,3.4,1.4.8,3.1.2,4.2-1.4" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M281.3,66.9a6.37,6.37,0,0,0,0,5.4,3.53,3.53,0,0,0,4.5,1.9c0,.3-.1,3.6,1.9,5.4,1.7,1.5,4.2,1.3,6.1-.6" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M277.2,69.2a8.1,8.1,0,0,0,.7,4.9,4.7,4.7,0,0,0,5,2.6,9.44,9.44,0,0,0,1.5,6,5.35,5.35,0,0,0,5.9,2" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M273.5,73.4a7.56,7.56,0,0,0,.8,5.3,4.12,4.12,0,0,0,5.3,1.5,9.73,9.73,0,0,0,1.3,5.8,5.13,5.13,0,0,0,6,2.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M270.7,81a5.15,5.15,0,0,0,1.5,3.4,3.41,3.41,0,0,0,4.6-.3,6.56,6.56,0,0,0,1.1,5.7,3.72,3.72,0,0,0,4.6,1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M270,86.8a3.39,3.39,0,0,0,1.3,3.4,2.05,2.05,0,0,0,2.6-.6,3.9,3.9,0,0,0,.5,3.8,2.31,2.31,0,0,0,3.6-.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
          <path d="M270.2,92.6a1.66,1.66,0,0,0,.9,1.6c.7.3,1.5-.4,1.8-1.5a2.11,2.11,0,0,0,0,2.4,1.27,1.27,0,0,0,2,.1" transform="translate(-197.05 -26.19)" fill="none" stroke="#009b4f" strokeMiterlimit="10"/>
        </g>
      </g>
    </g>
    <path id="vine" d="M264,72.8c17.9,39.6-21.7,149.5-21.7,149.5s-17.2,80.2,7,136.3,24.9,163,11.5,195.5S228.3,673,242.3,721.2s18.1,84.2,10.6,100.5" transform="translate(-197.05 -26.19)" fill="none" stroke="#00854a" strokeMiterlimit="10" strokeWidth="7"/>
    <path d="M619.8,281.7" transform="translate(-197.05 -26.19)" fill="none" stroke="#000" strokeMiterlimit="10"/>
    <a.g transform={style.transform} id="monster-front">
      <polyline points="135.56 81.61 135.56 88.36 102.89 88.36 102.89 82.22" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <ellipse cx="118.34" cy="50.31" rx="33.4" ry="36.3" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <ellipse cx="118.34" cy="48.11" rx="9.4" ry="11.5" fill="#fff" stroke="#000" strokeMiterlimit="10"/>
      <path d="M333.39,45.19a14.33,14.33,0,0,0,6.1-7.7c1.7-5.3-2-9.9-.8-10.7s6.8,3,9.1,8.6c3.5,8.6-2.5,19.1-3.6,20.8" transform="translate(-197.05 -26.19)" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <path d="M291.29,49.59c-2.8,6.4-9.2,8.1-9.2,11.4s6.3,3.5,9.9-2c.5-.7,1.5-1.8,1.2,3.5-.8,13.6,4-2.3,4-3.8,0,0-1.2,1.3,1.8,6.8s7.6-7.6,7.6-7.6-1.3-2,4.1,5.6a4.69,4.69,0,0,0,2.8,2.2c3.7.6,5.9-8.8,5.9-8.8a7.47,7.47,0,0,0,4.3,8.1c5.4,2.8,8.6-8.3,8.6-8.3s1.53,8.43,5.8,7.3c10.16-2.67,2.05-4.81,5-3.49,0,0-.21,3.59,5.79,4.39s-4.6-8.8-4.6-8.8-11.2-19.4-33.2-15.7C294.39,43.29,291.29,49.59,291.29,49.59Z" transform="translate(-197.05 -26.19)" fill="#fcc" stroke="#000" strokeMiterlimit="10"/>
      <path d="M309.39,69.39" transform="translate(-197.05 -26.19)" fill="#fff" stroke="#000" strokeMiterlimit="10"/>
      <ellipse cx="118.34" cy="48.41" rx="3.6" ry="4.4" stroke="#000" strokeMiterlimit="10"/>
      <path d="M304.14,110.68" transform="translate(-197.05 -26.19)" fill="none" stroke="#000" strokeMiterlimit="10"/>
      <path d="M324.79,110.68" transform="translate(-197.05 -26.19)" fill="none" stroke="#000" strokeMiterlimit="10"/>
      <path d="M364.57,144.84" transform="translate(-197.05 -26.19)" fill="#fff" stroke="#000" strokeMiterlimit="10"/>
      <path d="M260.22,107.8" transform="translate(-197.05 -26.19)" fill="none" stroke="#000" strokeMiterlimit="10"/>
      <path d="M248.31,110.68" transform="translate(-197.05 -26.19)" fill="none" stroke="#000" strokeMiterlimit="10"/>
      <path d="M238.19,110.68" transform="translate(-197.05 -26.19)" fill="none" stroke="#000" strokeMiterlimit="10"/>
      <path d="M97.07,88.64H139.6a3.13,3.13,0,0,1,3.13,3.13v63.81a0,0,0,0,1,0,0H93.95a0,0,0,0,1,0,0V91.77A3.13,3.13,0,0,1,97.07,88.64Z" fill="#9fc9eb" stroke="#000" strokeMiterlimit="10"/>
      <path d="M79,116.18H93.95a0,0,0,0,1,0,0v6.89a0,0,0,0,1,0,0H82.18A3.18,3.18,0,0,1,79,119.89v-3.72A0,0,0,0,1,79,116.18Z" fill="#9fc9eb" stroke="#000" strokeMiterlimit="10"/>
      <rect x="82.53" y="94.47" width="39.41" height="25.09" rx="3.16" fill="#9fc9eb" stroke="#000" strokeMiterlimit="10"/>
      <rect x="53.46" y="99.64" width="29.06" height="16.54" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <path d="M82.2,155.57h60.53a0,0,0,0,1,0,0v28.14a3.19,3.19,0,0,1-3.19,3.19H82.2A3.19,3.19,0,0,1,79,183.71V158.77A3.19,3.19,0,0,1,82.2,155.57Z" fill="#c9c" stroke="#000" strokeMiterlimit="10"/>
      <rect x="45.1" y="94.47" width="8.37" height="23.48" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <rect x="39.93" y="94.47" width="5.16" height="5.16" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <rect x="39.93" y="100.51" width="5.16" height="5.16" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <rect x="39.93" y="106.55" width="5.16" height="5.16" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <polygon points="44.85 117.96 39.93 117.96 40.02 112.79 44.94 112.8 44.85 117.96" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <path d="M304.39,103.49" transform="translate(-197.05 -26.19)" fill="none" stroke="#000" strokeMiterlimit="10"/>
      <path d="M304.39,103.49" transform="translate(-197.05 -26.19)" fill="none" stroke="#000" strokeMiterlimit="10"/>
      <path d="M307.92,96.47" transform="translate(-197.05 -26.19)" fill="none" stroke="#000" strokeMiterlimit="10"/>
      <path d="M322.25,96.47l4.89,4.7v-7a22.38,22.38,0,0,1-24.44-.22v7.26l5.22-4.7" transform="translate(-197.05 -26.19)" fill="#fff" stroke="#000" strokeMiterlimit="10"/>
      <polyline points="77.9 182.9 42.48 182.9 42.48 163.08 78.15 163.08" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
      <polygon points="42.48 184.65 29.27 184.65 28.78 161.33 41.99 161.33 42.48 184.65" fill="#99e0cc" stroke="#000" strokeMiterlimit="10"/>
    </a.g>
  </svg>
  <div onScroll={(e) => {onScroll((e.target.scrollTop / (e.target.scrollHeight - e.target.getClientRects()[0].height)) * (200 * 3))}} className='vine-p'>
  <p>{props.reading}</p>
  </div>
  </div>
  </div>
  )
}
