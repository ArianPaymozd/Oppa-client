import { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';
import './App.css';
import Gears from './gears';
import Goo from './Goo'

function App() {
  const [popped, setPopped] = useState(false)
  const {width, opacity, right, top} = useSpring({
    from: popped ? {width: '12%', opacity: 1, right: '30%', top: '30%'} : {width: '20%', opacity: 0, right: '25%', top: '6%'},
    config: {tension: 800},
    to: popped ? {width: '20%', opacity: 0, right: '25%', top: '0'} : { width: '12%', opacity: 1, right: '30%', top: '30%'}
  })
  return (
    <div className="App">
       <main className='App-main' role="main">
      <header className='header' role="banner">
        <h1 className='Logo'>Oppa</h1>
      </header>
      <section className='intro'>
        <header>
          <h3 className='intro-header'>What we do</h3>
        </header>
        <div className='intro-content'>
          <div className="goo"><Goo /></div>
          <p className='intro-paragraph'>At Oppa our mission is to help children with special needs stay engaged with their learning</p>
        </div>
      </section>
      <section className='mid'>
        <header>
        <h3 className='mid-header'>Keep your students engaged</h3>
        </header>
        <div className='mid-content'>
        <div classname='bubble-svgs'>
        <animated.svg style={{width, opacity, right, top}} className='bubble' xmlns="http://www.w3.org/2000/animated.svg" viewBox="0 0 216 216"><g id="drops">
            
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
        <animated.svg onClick={() => setPopped(!popped)} style={{width, opacity, right, top}} className='bubble' xmlns="http://www.w3.org/2000/animated.svg" viewBox="0 0 216 216">
          
          <g id="bubble">
            <g>
              <g>
                <path d="M363.84,266.16A108,108,0,0,1,212.16,417.84,108,108,0,1,0,363.84,266.16Z" transform="translate(-189 -243)" fill="#66cef6"/>
                <path d="M387,333a107.57,107.57,0,0,0-23.16-66.84A108,108,0,0,0,212.16,417.84,108,108,0,0,0,387,333Z" transform="translate(-189 -243)" fill="#91d9f8"/>
              </g>
              <path d="M209,351a88.1,88.1,0,0,1,88-88" transform="translate(-189 -243)" fill="#90d8f8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"/>
            </g>
          </g>
        </animated.svg>
        </div>
        <p className='mid-paragragh'>With Oppa, teachers can keep their students interested in their readings using vibrant colors and fun page animations!</p></div>
      </section>
      <section className='closing'>
        <header>
        <h3 className='closing-header'>Make learning fun</h3>
        </header>
        <div className='closing-content'>
          <div>
          <Gears />
        </div>
        <p className='closing-paragragh'>With Oppa, you can make your lesson plans more engaging and fun by gamifying the lesson, choose constant page animations as well as "reward animations" that show up only when taskes are completed</p>
        </div>
      </section>
      <section className='sign-up'>
        <header>
            <h3>Sign Up Now</h3>
        </header>
        <form className='signup-form'>
            <div>
              <label htmlFor="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
      </section>
    </main>
    </div>
  );
}

export default App;
