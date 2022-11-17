import { useNavigate } from 'react-router-dom'

// context
import { useAuthContext } from '../../hooks/useAuthContext'

// hooks
import { useSignout } from '../../hooks/useSignout'

// styles
import './Navbar.scss'

export default function Navbar() {
  const navigate = useNavigate()
  const { signout } = useSignout()
  const { user } = useAuthContext()

  return (
    <div className='nav-container'>
      <h1>"NAVBAR"</h1>
      {user && <button onClick={signout}>Signout</button>}
      {!user &&
        <div className='nav-auth-toggle'>
          <div className={'toggle-title'} onClick={() => navigate('/auth/sign-in')}>
            <h3>Sign in</h3>
          </div>
          <div className='toggle-title' onClick={() => navigate('/auth/create-account')}>
            <h3>Create account</h3>
          </div>
        </div>
      }
    </div>
  )
}
