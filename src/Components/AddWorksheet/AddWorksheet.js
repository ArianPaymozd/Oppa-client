import { useHistory, useParams } from "react-router-dom"
import config from "../../config"
import TokenService from "../../services/token-service"
import './AddWorksheet.css'
import Nav from "../Nav"

export default function AddWorksheet() {
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
                worksheet_name: e.target['worksheet-name'].value
            })
        })
        .then(() => history.push(`/teacher_classes/${class_id}`))
    }
    return (
        <div className='AddWorksheet-main'>
                <header className='header'>
                    <h1>Oppa</h1> 
                    <Nav />
                </header>
            <div className='AddWorksheet-content'>
                <header className='AddWorksheet-heading'><h2 className='AddWorksheet-title'>Add Worksheet</h2></header>
            <form className='AddWorksheet-form' onSubmit={(e) => handleAddWorksheet(e)}>
                <input type='text' className='worksheet-input' name='worksheet-name' placeholder='Enter Title' required />
                <textarea type='text' className='worksheet-textarea' name='worksheet-text' placeholder='Enter Text' required />
                <select className='worksheet-input' name='scroll-animation'>
                    <option value='bubble'>Bubble Pop</option>
                    <option value='vine-climb'>Vine Climb</option>
                </select>
                <button className='AddWorksheet-button' type='submit'>Add Worksheet</button>
            </form>
            </div>
        </div>
    )
}