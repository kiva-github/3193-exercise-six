import { useState } from "react";

// context
import { useAuthContext } from './useAuthContext'

// firebase imports
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../utils/firebase/config";

export const useSignIn = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
    
  const signIn = async (email, password) => {
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      dispatch({ type: 'LOG_IN', payload: res.user})
      setError(null)
    })
    .catch((error) => {
      setError(error.message)
    });
  }
  return { error, signIn }
}