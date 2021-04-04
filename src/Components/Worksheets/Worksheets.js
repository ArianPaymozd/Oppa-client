import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import config from "../../config";
import Nav from "../Nav";
import TokenService from "../../services/token-service";
import './Worksheets.css'
import WorksheetsContext from "../../Contexts/WorksheetsContext";

export default function Worksheets() {
    const {class_id} = useParams()
    const history = useHistory()

    const context = useContext(WorksheetsContext)

    const [worksheets, setWorksheets] = useState([])

    const [style] = useSpring(() => ({
        config: { tension: 80, friction: 25 },
        from: {borderRadius: `50px`, width: '0vw', opacity: 0, fontSize: '0vw'},
        to: {borderRadius: `25px`, width: '20vw', opacity: 1, fontSize: window.innerWidth >= 1800 ? '1erm' : '2.5vw' }
    }))

    const [addStyle] = useSpring(() => ({
        config: { tension: 80, friction: 25 },
        from: {borderRadius: `50px`, height: '0vw', opacity: 0, fontSize: '0vw'},
        to: {borderRadius: `25px`, height: '10vw', opacity: 1, fontSize: window.innerWidth >= 1800 ? '1erm' : '2.5vw' }
    }))

    useEffect(() => {
    fetch(`${config.API_ENDPOINT}/worksheets/${TokenService.getStudentId() ? 'students/' : ''}${class_id}`, {
        method: 'get',
        headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
        }
    })
    .then(res =>
        (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    )
    .then(worksheets => {
        let placeholdersArr = []
        if ((worksheets.length + 1) % 4 === 0 && worksheets.length + 1 > 2) {
            let placeholders = 0
            while (placeholders < 12) {
                placeholdersArr.push(1)
                placeholders++
            }
        } else {
            const extraForRow = ((Math.floor((worksheets.length + 1) / 4) + 1) * 4) - (worksheets.length + 1)
            let placeholders = 0
            while (placeholders < 8 + extraForRow) {
                placeholdersArr.push(1)
                placeholders++
            }
        }
            setWorksheets([...worksheets.reverse(), ...placeholdersArr])
    })
}, []) 

    const handleWorksheetClick = (worksheet) => {
        context.insertWorksheet(worksheet)
        history.push(`/worksheet/${worksheet.worksheet_id}`)
    }
        return (
            <div className='TeacherClassPage-main'>
                <header className='header'>
                    <h1>Oppa</h1> 
                    <Nav />
                </header>
                {TokenService.getTeacherId()
                ? <Link to={`/add_worksheet/${class_id}`}>
                    <animated.ul style={addStyle} className='worksheet'>
                        <li>Add Workseet</li>
                    </animated.ul>
                </Link>
                : ''}
                {worksheets.map((worksheet, idx) => {
                    return (
                        <animated.ul key={idx} style={style} className={worksheet.worksheet_name ? 'worksheet': 'worksheet-placeholder'} onClick={() => handleWorksheetClick(worksheet)}>
                            <li key={idx}>{worksheet.worksheet_name}</li>  
                        </animated.ul>
                    )
                })}
            </div>
        )
}