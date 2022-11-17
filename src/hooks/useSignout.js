import { useState } from 'react'

// firebase
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase/config'

// context
import { useAuthContext } from './useAuthContext'

export const useSignout = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signout = async () => {
        setError(null)
        try {
            await signOut(auth)
            dispatch({ type: 'LOG_OUT', payload: null})
            setError(null)
        } catch (err) {
            setError(err.message)
        }
    }
    return { error, signout }
}