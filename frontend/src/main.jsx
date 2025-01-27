import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Auth from './modules/Auth/screens/Auth.jsx'
import Profile from './modules/Profile/screens/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
)
