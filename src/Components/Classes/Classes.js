import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import ApiContext from '../../Contexts/ApiContext'
import config from '../../config'
import Nav from '../Nav'
import TokenService from '../../services/token-service'
import './Classes.css'

export default function Classes() {
    const [classes, setClasses] = useState([])

    const context = useContext(ApiContext)

    const [style] = useSpring(() => ({
        config: { tension: 80, friction: 25 },
        from: {borderRadius: `50%`, width: '0vw', opacity: 0, fontSize: '0vw'},
        to: {borderRadius: `16%`, width: '20vw', opacity: 1, fontSize: window.innerWidth >= 2000 ? '1erm' : '2.5vw' }
    }))

    const [addStyle] = useSpring(() => ({
        config: { tension: 80, friction: 25 },
        from: {borderRadius: `50%`, width: '0vw', opacity: 0, fontSize: '0vw'},
        to: {borderRadius: `16%`, width: '20vw', opacity: 1, fontSize: window.innerWidth >= 2000 ? '1erm' : '2.5vw' }
    }))

    const [deleteStyle] = useSpring(() => ({
        config: { tension: 80, friction: 25 },
        from: { width: '0vw', opacity: 0, fontSize: '0vw'},
        to: { width: '20vw', opacity: 1, fontSize: window.innerWidth >= 2000 ? '1erm' : '2.5vw' }
    }))

    useEffect(() =>
        {
        fetch(`${config.API_ENDPOINT}/classes/${TokenService.getStudentId() ? 'students/' : ''}${TokenService.getTeacherId() ? TokenService.getTeacherId() : TokenService.getStudentId()}`, {
            method: 'get',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(data => {
            let placeholdersArr = []
            if (data.length === 0) {
                let placeholders = 0
                while (placeholders < 7) {
                    placeholdersArr.push(1)
                    placeholders++
                }
            }
            else if ((data.length + 1) % 4 === 0 && data.length + 1 > 2) {
                let placeholders = 0
                while (placeholders < 8) {
                    placeholdersArr.push(1)
                    placeholders++
                }
            } else {
                const extraForRow = ((Math.floor((data.length + 1) / 4) + 1) * 4) - (data.length + 1)
                let placeholders = 0
                while (placeholders < 4 + extraForRow) {
                    placeholdersArr.push(1)
                    placeholders++
                }
            }
            if (data.length > 0) {
                setClasses([...data, ...placeholdersArr])
                context.insertClasses(data)
            } else {
                setClasses([...placeholdersArr])
            }
        })
    }
    , [])

    function handleDelete(class_id) {
        fetch(`${config.API_ENDPOINT}/classes/${class_id}`, {
            method: 'delete',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        })
        .then(() => {
            const newClasses = classes.filter(course => course.class_id !== class_id)
            setClasses(newClasses)
        })
    }

        return (
            <>
                <div className='TeacherClasses-main'>    
                <header className='header'>
                    <h1>Oppa</h1> 
                    <Nav />
                </header>
                    <Link to={`/create_class`}>
                        <animated.ul style={addStyle} className='class'>
                            <li>{TokenService.getTeacherId() ? 'Add Class' : 'Join Class'}</li>
                        </animated.ul>
                    </Link>
                    {classes.map((course, idx) => {
                        return (
                            <div key={idx} className='class-container'>
                            {course.class_id && TokenService.getTeacherId() ? <animated.button key={`button-${idx}`} style={deleteStyle} className='delete-class' onClick={() => {handleDelete(course.class_id)}}>Delete</animated.button> : null}
                                <Link key={idx} to={ course.class_id ? `/teacher_classes/${course.class_id}` : '/teacher_classes'} >
                                    <animated.ul style={style} className={course.class_id ? 'class' : 'class-placeholder'}>
                                        <li><b>{course.class_name}</b></li>
                                        <li>{course.students !== undefined ? `Students: ${course.students}` : ''}</li>
                                        <li>{course.worksheets !== undefined ? `Worksheets: ${course.worksheets}` : ''}</li>
                                    </animated.ul>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </>
        )
}