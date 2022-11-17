import { useState } from "react";

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../utils/firebase/config";

import { useAuthContext } from './useAuthContext'


export const useSignIn = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
    
  const signIn = async (email, password) => {
    setError(null)

    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      // Signed in 
      dispatch({ type: 'LOG_IN', payload: res.user})
      setError(null)
    })
    .catch((error) => {
      setError(error.message)
    });
  }
  return { error, signIn }
}