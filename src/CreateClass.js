import { useHistory } from "react-router"
import config from "./config"
import TokenService from "./services/token-service"
import './CreateClass.css'

export default function CreateClass() {
    const history = useHistory()
    function handleAddClass(e) {
        e.preventDefault()
        fetch(`${config.API_ENDPOINT}/classes`, {
            method: 'post',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                class_name: e.target['class-name'].value,
                teacher_id: parseInt(TokenService.getTeacherId()),
                class_password: e.target['class-password'].value
            })
        })
        .then(() => history.push('/teacher_classes'))
    }
    return (
        <div className='CreateClass-main'>
            <div className='CreateClass-content'>
                <h2 className='CreateClass-heading'>Create a new class!</h2>
                <form onSubmit={e => handleAddClass(e)} className='CreateClass-form'>
                    <input name='class-name' className='class-input' placeholder='Class Name' aria-label='class name' required />
                    <input type={'password'} name='class-password' className='class-input' placeholder='Class Password' aria-label='class password' />
                    <button type='submit' className='CreateClass-button'>Add</button>
                </form>
            </div>
        </div>
    )
}