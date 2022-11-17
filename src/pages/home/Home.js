// context
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Home() {
  const { user } = useAuthContext()

  return (
    <>
      <h3>Welcome, {user.displayName}!</h3><br/>
      <h4>Account Details:</h4>
      <p>Email: {user.email}</p>
      <p>Membership ID: {user.uid.toUpperCase()}</p>
    </>
  )
}