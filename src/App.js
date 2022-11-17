import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// components
import Navbar from './components/navbar/Navbar';

// hooks
import { useAuthContext } from './hooks/useAuthContext'

// pages
import Authentication from './pages/authentication/Authentication';
import Home from './pages/home/Home'

function App() {
  const { authIsReady, user } = useAuthContext()
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {authIsReady &&
          <Routes>
            <Route path='/' element={user ? <Navigate to='/home' /> : <Navigate to='/auth/sign-in' />} />
            <Route path='/auth/:toggle' element={user ? <Navigate to='/home' /> : <Authentication />} />
            <Route path='/home' element={user ? <Home /> : <Navigate to='/auth/sign-in' />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        } 
      </BrowserRouter>
    </>
  )
}
export default App;