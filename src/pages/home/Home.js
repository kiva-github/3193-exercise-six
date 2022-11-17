// context
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Home.scss'

export default function Home() {
  const { user } = useAuthContext()
  return (
    <div>
      <div>Welcome, {user.displayName}</div>
    </div>
  )
}