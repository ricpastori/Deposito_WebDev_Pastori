import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AlertBox} from './AlertBox.jsx'
import App from './App.jsx'
import {Dashboard} from './Dashboard.jsx'
import Franco from './ProductCard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Franco />
    <Dashboard />
    <AlertBox />
  </StrictMode>,
)
