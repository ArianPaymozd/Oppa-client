import { useContext } from "react"
import Bubble from "./Bubble"
import VineClimb from "./VineClimb"
import WorksheetsContext from "./WorksheetsContext"

export default function WorksheetPage() {
    const {worksheet} = useContext(WorksheetsContext)
    console.log(worksheet)

    function scrollAnimation(animation) {
        if (animation === 'vine-climb') {
            return <VineClimb reading={worksheet.reading} />
        }
        else if (animation === 'bubble') {
            return <Bubble reading={worksheet.reading} />
        }
    }
    console.log(worksheet.animation_scroll)

    return (
        <div>
            <div className='reading'>
            </div>
            <div>
                {scrollAnimation(worksheet.animation_scroll)}
            </div>
        </div>
    )
}