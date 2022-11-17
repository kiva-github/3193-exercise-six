import { useState } from 'react'

// hooks
import { useSignUp } from '../../hooks/useSignUp'

// styles
import '../authStyles.scss'

export default function CreateAccount() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { error, signUp } = useSignUp()

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp(username, email, password, confirmPassword)
  }

  return (
    <div className='auth-container'>
        <h2>Create an account</h2>
        <form className='auth-form' onSubmit={handleSubmit}>
            <div className='input-field'>
              <label>Username</label>
              <input
                required
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className='input-field'>
              <label>Email</label>
              <input
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
              />
            </div>
            <div className='input-field'>
              <label>Password</label>
              <input
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
              />
            </div>
            <div className='input-field'>
              <label>Confirm password</label>
              <input
                  required
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
              />
            </div>
            {error && <p>{error}</p>}
            <button>Create Account</button>
        </form>
    </div>
  )
}