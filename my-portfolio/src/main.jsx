import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './Pages/Portfolio.jsx'  // Import your Portfolio instead
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />  // Render Portfolio instead of App
  </React.StrictMode>,
)