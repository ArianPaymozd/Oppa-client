import { useHistory, useParams } from "react-router-dom"
import config from "./config"
import TokenService from "./services/token-service"
import './AddWorksheet.css'

export default function Worksheet() {
    const {class_id} = useParams()
    const history = useHistory()
    const handleAddWorksheet = e => {
        e.preventDefault()
        fetch(`${config.API_ENDPOINT}/worksheets`, {
            method: 'post',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                class_id: class_id,
                reading: e.target['worksheet-text'].value,
                animation_scroll: e.target['scroll-animation'].value,
                animation_questions: e.target['question-animation'].value,
                worksheet_name: e.target['worksheet-name'].value
            })
        })
        .then(() => history.push(`/teacher_classes/${class_id}`))
    }
    return (
        <div className='AddWorksheet-main'>
            <form onSubmit={(e) => handleAddWorksheet(e)}>
                <input type='text' name='worksheet-name' placeholder='Enter Title' required />
                <textarea type='text' name='worksheet-text' placeholder='Enter Text' required />
                <select name='scroll-animation'>
                    <option value='bubble'>Bubble Pop</option>
                    <option value='vine-climb'>Vine Climb</option>
                </select>
                <select name='question-animation'>
                    <option value='car-game'>Car Game</option>
                </select>
                <button type='submit'>Add Worksheet</button>
            </form>
        </div>
    )
}