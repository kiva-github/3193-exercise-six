import { Outlet } from 'react-router-dom'

// styles
import './Authentication.scss'

export default function Authentication() {
    return (
        <div className='authentication-container'>
            <div className='form-container'>
                <Outlet />
            </div>
        </div>
    )
}
