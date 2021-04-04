import { useState } from 'react';
import { useHistory } from 'react-router'
import { animated, useSpring } from 'react-spring';
import './LandingPage.css';
import Gears from '../../animations/Gears/gears';
import Goo from '../../animations/Goo/Goo'
import AuthApiService from '../../services/auth-service';

function SignupForm(props) {
    const history = useHistory()
    const [error, setError] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        AuthApiService.postUser({
            full_name: e.target['full-name'].value,
            username: `${e.target['username'].value}`,
            password: e.target['password'].value,
            userType: props.userType === 1 ? 'teacher' : 'student'
        })
        .then(res => {
            history.push('/teacher_classes')
        }) 
        .catch(res => {
          setError({ error: res.error })
        })
    }
    
    return (
      <div className='sign-up'>
        <header>
            <h3>Sign Up Now</h3>
        </header>
        <div>{error ? error.error : null}</div>
        <form className='signup-form' onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name='full-name' id='full-name' className='register-input' placeholder='Full Name: John Smith' required />
    
            <input type="text" name='username' id='username' className='register-input' placeholder='Username: user1234' required />
    
            <input type="password" name='password' id='password' className='register-input' placeholder='Password: Password1$' required />
            
            <div className='sign-up-buttons'>
              <button className='signup-button' type='submit'>Sign Up</button>
              <button onClick={() => props.setForm(2)} className='signup-button'>Log-in</button>
            </div>
        </form>
      </div>
    )
}

function LogInForm(props) {
  const history = useHistory()
  const [error, setError] = useState({})

  function handleSubmit(e) {
      e.preventDefault()
      AuthApiService.postLogin({password: e.target['password'].value, username: e.target['username'].value, userType: props.userType === 1 ? 'teacher' : 'student'})
      .then(() => {
          history.push('/teacher_classes')
      })
      .catch(res => {
        setError({ error: res.error })
      })
  }


    return (
      <div className='sign-up'>
        <header>
            <h3>Log-in</h3>
        </header>
        <div>{error ? error.error : null}</div>
        <form className='signup-form' onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name='username' id='username' className='register-input' placeholder='Username' required />
    
            <input type="password" name='password' id='password' className='register-input' placeholder='Password' required />
            
            <div className='sign-up-buttons'>
              <button onClick={() => props.setForm(1)} className='signup-button'>Sign Up</button>
              <button type='submit' className='signup-button'>Log-in</button>
            </div>
        </form>
      </div>
    )
}

function UserSelect(props) {
    return (
      <div className='sign-up'>
        <header>
            <h3>Are you a teacher or student?</h3>
        </header>
            <div className='sign-up-buttons'>
              <button onClick={() => props.setUser(1)} className='signup-button'>Teacher</button>
              <button onClick={() => props.setUser(2)} className='signup-button'>Student</button>
            </div>
      </div>
    )
}

function LandingPage() {
  const [popped, setPopped] = useState(false)
  const [form, setForm] = useState(1)
  const [userType, setUserType] = useState(0)

  const [bubbleStyle, setBubbleStyle] = useSpring(() => ({
    config: { tension: 950 },
    width: '30%',
    opacity: 1
  }))

  function handleBubblePop() {
    setPopped(!popped)
    !popped ?
    setBubbleStyle({
      width: '40%',
      opacity: 0
    })
    : setBubbleStyle({
      width: '30%',
      opacity: 1
    })
  }

  function forms() {
    if (userType === 0) {
      return <UserSelect setUser={setUserType} />
    } else {
      return teacherForms()
    }
  }

  function teacherForms() {
    return form === 1 ? <SignupForm userType={userType} setForm={setForm}/> : <LogInForm userType={userType} setForm={setForm} />
  }

  return (
    <div className="Landing">
      
      <header className='header'>
          <h1>Oppa</h1> 
      </header>
      <section className='intro'>
        <header className='header-container'>
          <h3 className='intro-header'>What we do</h3>
        </header>
        <div className='intro-content'>
          <div className="goo"><Goo /></div>
          <p className='intro-paragraph'>At Oppa our mission is to help children with special needs stay engaged with their learning</p>
        </div>
      </section>
      <section className='mid'>
        <header className='header-container'>
        <h3 className='mid-header'>Keep your students engaged</h3>
        </header>
        <div className='mid-content'>
        <div className='bubble-svgs'>
        <animated.svg style={bubbleStyle} className='bubble' xmlns="http://www.w3.org/2000/animated.svg" viewBox="0 0 216 216"><g id="drops">
            
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
        <animated.svg onClick={() => handleBubblePop()} style={bubbleStyle} className='bubble' xmlns="http://www.w3.org/2000/animated.svg" viewBox="0 0 216 216">
          
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
        <p className='mid-paragraph'>With Oppa, teachers can keep their students interested in their readings using vibrant colors and fun page animations!</p></div>
      </section>
      <section className='closing'>
        <header className='header-container'>
        <h3 className='closing-header'>Make learning fun</h3>
        </header>
        <div className='closing-content'>
          <div className='gears-container'>
          <Gears />
        </div>
        <p className='closing-paragraph'>With Oppa, you can make your lesson plans more engaging and fun by gamifying the lesson, choose constant page animations as well as "reward animations" that show up only when taskes are completed</p>
        </div>
      </section>
      <section className='sign-up-container'>        
        {forms()}
      </section>
    </div>
  );
}

export default LandingPage;