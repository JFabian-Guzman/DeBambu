import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Auth from './modules/Auth/screens/Auth.jsx'
import HomeScreen from './modules/Home/screens/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeScreen />
  </StrictMode>,
)
