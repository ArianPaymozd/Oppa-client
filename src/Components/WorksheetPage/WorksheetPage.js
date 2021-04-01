import { useContext } from "react"
import Bubble from "../../animations/Bubble/Bubble"
import Nav from "../Nav"
import VineClimb from "../../animations/Vine/VineClimb"
import WorksheetsContext from "../../Contexts/WorksheetsContext"
import './WorksheetPage.css'

export default function WorksheetPage() {
    const {worksheet} = useContext(WorksheetsContext)

    function scrollAnimation(animation) {
        if (animation === 'vine-climb') {
            return <VineClimb reading={worksheet.reading} />
        }
        else if (animation === 'bubble') {
            return <Bubble reading={worksheet.reading} />
        }
    }

    return (
            <div className='Worksheet-main'>
                <header className='header'>
                    <h1>Oppa</h1> 
                    <Nav />
                </header>
                {scrollAnimation(worksheet.animation_scroll)}
            </div>
    )
}