import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// context
import { useAuthContext } from '../../hooks/useAuthContext'

// hooks
import { useSignout } from '../../hooks/useSignout'

// styles
import './Navbar.scss'

export default function Navbar() {
  const { signout } = useSignout()
  const { user } = useAuthContext()
  const { pathname } = useLocation()
  const [toggle, setToggle] = useState(pathname)
  const navigate = useNavigate()

  const handleClick = (tog) => {
    if (tog === pathname) {
      return
    } else {
      setToggle(tog)
      navigate(tog)
    }
  }

  return (
    <div className='nav-container'>
      <h1>"NAVBAR"</h1>
      {user && <button onClick={signout}>Signout</button>}
      {!user &&
        <div className='nav-auth-toggle'>
          <div className={toggle === '/auth/sign-in' ? 'toggle-title active' : 'toggle-title'} onClick={() => handleClick('/auth/sign-in')}>
            <h3>Sign in</h3>
          </div>
          <div className={toggle === '/auth/create-account' ? 'toggle-title active' : 'toggle-title'} onClick={() => handleClick('/auth/create-account')}>
            <h3>Create account</h3>
          </div>
        </div>
      }
    </div>
  )
}