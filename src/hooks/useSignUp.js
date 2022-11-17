import { useState } from "react";

import { auth } from "../utils/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
    
  const signUp = async (username, email, password, confirmPassword) => {
    setError(null)
    if (password !== confirmPassword) {
      setError('Passwords do not match')
    } else {
      console.log('Passwords match')
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
      });
    }
  }
  return { signUp, error }
}