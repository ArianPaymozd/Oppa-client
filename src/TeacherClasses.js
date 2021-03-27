import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import ApiContext from './ApiContext'
import config from './config'
import TokenService from './services/token-service'
import './TeacherClasses.css'

export default function TeacherClasses() {
    const [classes, setClasses] = useState([])

    const context = useContext(ApiContext)

    const [style] = useSpring(() => ({
        config: { tension: 180, friction: 20 },
        from: {borderRadius: `50%`, width: '0vw', opacity: 0},
        to: {borderRadius: `16%`, width: '20vw', opacity: 1}
    }))

    useEffect(() =>
        {
        fetch(`${config.API_ENDPOINT}/classes/${TokenService.getTeacherId()}`, {
            method: 'get',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            let placeholdersArr = []
            if ((data.length + 1) % 4 === 0 && data.length + 1 > 2) {
                let placeholders = 0
                while (placeholders < 8) {
                    placeholdersArr.push(1)
                    placeholders++
                }
            } else {
                const extraForRow = ((Math.floor((data.length + 1) / 4) + 1) * 4) - (data.length + 1)
                let placeholders = 0
                console.log(Math.floor(data.length / 4))
                while (placeholders <= 8 - extraForRow) {
                    placeholdersArr.push(1)
                    placeholders++
                }
            }
            setClasses([...data, ...placeholdersArr])
            context.insertClasses(data)
        })
    }
    , [])

    const renderExtraClasses = () => {
            let placeholdersArr = []
        if (classes.length % 4 === 0) {
            let placeholders = 0
            while (placeholders <= 8) {
                placeholdersArr.push(1)
                placeholders++
            }
        } else {
            const extraForRow = ((Math.floor(classes.length / 4) + 1) * 4) - classes.length
            let placeholders = 0
            console.log(Math.floor(classes.length / 4))
            while (placeholders <= 8 - extraForRow) {
                placeholdersArr.push(1)
                placeholders++
            }
            setClasses([...classes, ...placeholdersArr])
        }
    }
        return (
            <>
                <div className='TeacherClasses-main'>
                    <Link to={`/create_class`}>
                        <ul className='class'>
                            <li>Add Class</li>
                        </ul>
                    </Link>
                    {classes.map((course, idx) => {
                        console.log(classes)
                        return (
                            <Link key={idx} to={ course.class_id ? `/teacher_classes/${course.class_id}` : '/teacher_classes'} >
                                <animated.ul style={style} className={course.class_id ? 'class' : 'class-placeholder'}>
                                    <li>{course.class_name}</li>
                                    <li>{course.students}</li>
                                    <li>{course.worksheets}</li>
                                </animated.ul>
                            </Link>
                        )
                    })}
                </div>
            </>
        )
}