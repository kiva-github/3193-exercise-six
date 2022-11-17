import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// styles
import './App.css';

// components
import Navbar from './components/navbar/Navbar';
import SignIn from './components/sign-in/SignIn'
import CreateAccount from './components/create-account/CreateAccount'

// pages
import Authentication from './pages/authentication/Authentication';
import Home from './pages/home/Home'

// hooks
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { authIsReady, user } = useAuthContext()
  
  return (
    <>
      <BrowserRouter>
      <Navbar />
        {authIsReady &&
        <Routes>
          <Route path='/' element={user ? <Navigate to='home' /> : <Navigate to='/auth/sign-in' />} />
          <Route path='/auth' element={user ? <Navigate to='/home' /> : <Authentication />}>
            <Route path='sign-in' element={user ? <Navigate to='/home' /> : <SignIn />} />
            <Route path='create-account' element={user ? <Navigate to='/home' /> : <CreateAccount />} />
          </Route>
          <Route path='/home' element={user ? <Home /> : <Navigate to='/auth/sign-in' />} />
        </Routes>
        } 
    </BrowserRouter>
    </>
  )
}
export default App;