import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'
import ChatPage from './pages/ChatPage'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

function App() {
  const { checkAuth, authUser, checkingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  if (checkingAuth) return null;

  return (
    <div className='app-bg'>
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to={'/auth'} />} />
        <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to={'/'} />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to={'/auth'} />} />
        < Route path='/chat/:id' element={authUser ? <ChatPage /> : <Navigate to={'/auth'} />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
