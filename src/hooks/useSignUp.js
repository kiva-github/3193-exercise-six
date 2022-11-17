import { useState } from "react";

// context
import { useAuthContext } from './useAuthContext';

// firebase imports
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../utils/firebase/config";

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
    
  const signUp = async (username, email, password, confirmPassword) => {
    setError(null)
    if (password !== confirmPassword) {
      setError('Passwords do not match')
    } else {
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, { displayName: username })
        .then(() => {
          dispatch({ type: 'LOG_IN', payload: res.user })
          setError(null)
        })
      })
      .catch((error) => {
        setError(error)
      })
    }
  }
  return { error, signUp }
}