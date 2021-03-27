import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import config from "./config";
import TokenService from "./services/token-service";
import './TeacherClassPage.css'
import WorksheetsContext, { WorksheetsProvider } from "./WorksheetsContext";

export default function ClassPage() {
    const {class_id} = useParams()
    const history = useHistory()

    const context = useContext(WorksheetsContext)

    const [worksheets, setWorksheets] = useState([])

    const [style] = useSpring(() => ({
        config: { tension: 180, friction: 20 },
        from: {borderRadius: `50px`, width: '0vw', opacity: 0},
        to: {borderRadius: `25px`, width: '20vw', opacity: 1}
    }))

    useEffect(() => {
    fetch(`${config.API_ENDPOINT}/worksheets/${class_id}`, {
        method: 'get',
        headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
        }
    })
    .then(res => res.json())
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
            console.log(extraForRow)
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
                <Link to={`/add_worksheet/${class_id}`}>
                    <ul className='worksheet'>
                        <li>Add Workseet</li>
                    </ul>
                </Link>
                {worksheets.map((worksheet, idx) => {
                    return (
                        <animated.ul style={style} className={worksheet.worksheet_name ? 'worksheet': 'worksheet-placeholder'} onClick={() => handleWorksheetClick(worksheet)}>
                            <li key={idx}>{worksheet.worksheet_name}</li>  
                        </animated.ul>
                    )
                })}
            </div>
        )
}