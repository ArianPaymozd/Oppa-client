import { Link } from "react-router-dom";
import TokenService from "../services/token-service";


export default function Nav() {

    return (
        <div className='nav'>
            <Link to='/teacher_classes'>Classes</Link>
            <Link to='/create_class'>Add Class</Link>
            <Link to='/' ><button onClick={() => {TokenService.clearAuthToken()}}>Log Out</button></Link>
        </div>
    )
}