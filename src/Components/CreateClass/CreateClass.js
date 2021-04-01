import { useHistory } from "react-router"
import config from "../../config"
import TokenService from "../../services/token-service"
import './CreateClass.css'
import Nav from "../Nav"

export default function CreateClass() {
    const history = useHistory()
    function handleAddClass(e) {
        e.preventDefault()
        const teacher = {
            class_name: e.target['class-name'].value,
            teacher_id: parseInt(TokenService.getTeacherId()),
            class_password: e.target['class-password'].value
        }
        const student = {
            class_id: e.target['class-name'].value,
            student_id: parseInt(TokenService.getStudentId()),
            class_password: e.target['class-password'].value
        }
        fetch(`${config.API_ENDPOINT}/classes${TokenService.getStudentId() ? '/students' : ''}`, {
            method: 'post',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(TokenService.getTeacherId() ? teacher : student)
        })
        .then(() => history.push('/teacher_classes'))
    }
    return (
        <div className='CreateClass-main'>    
        <header className='header'>
            <h1>Oppa</h1> 
            <Nav />
        </header>
            <div className='CreateClass-content'>
                <h2 className='CreateClass-heading'>{TokenService.getTeacherId() ? 'Create' : 'Join'} a new class!</h2>
                <form onSubmit={e => handleAddClass(e)} className='CreateClass-form'>
                    <input name='class-name' className='class-input' placeholder={TokenService.getTeacherId() ? 'Class Name': 'Class Id'} aria-label={TokenService.getTeacherId() ? 'Class Name': 'Class Id'} required />
                    <input type={'password'} name='class-password' className='class-input' placeholder='Class Password' aria-label='class password' />
                    <button type='submit' className='CreateClass-button'>Add</button>
                </form>
            </div>
        </div>
    )
}