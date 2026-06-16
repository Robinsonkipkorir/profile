import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Import the whole App
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Render App, which contains your Navbar and Experience */}
  </React.StrictMode>,
)