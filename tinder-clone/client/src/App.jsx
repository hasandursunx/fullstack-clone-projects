import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'
import ChatPage from './pages/ChatPage'

function App() {

  return (
    <div className='app-bg'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/chat/:id' element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App
