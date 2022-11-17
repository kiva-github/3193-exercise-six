import { useState } from 'react'

// hooks
import { useSignIn } from '../../hooks/useSignIn'

// styles
import '../authStyles.scss'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, signIn } = useSignIn()

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn(email, password)
  }

  return (
    <div className='auth-container'>
        <h2>Sign in</h2>
        <form className='auth-form' onSubmit={handleSubmit}>
          <div className='input-field'>
            <label>Email</label>
            <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input-field'>
            <label>Password</label>
            <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            {error && <p>{error}</p>}
            <button>Sign in</button>
        </form>
    </div>
  )
}