import { Navigate, useParams } from 'react-router-dom'

// components
import CreateAccount from '../../components/create-account/CreateAccount'
import SignIn from '../../components/sign-in/SignIn'

export default function Authentication() {
    const { toggle } = useParams()

    return (
        <>
            {toggle === 'sign-in' && <SignIn />}
            {toggle === 'create-account' && <CreateAccount />}
            {toggle !== 'sign-in' && toggle !== 'create-account' && <Navigate to='/auth/sign-in' />}
        </>
    )
}