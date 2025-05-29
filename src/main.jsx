import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Ensure the root element exists
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Failed to find the root element')
}

// Create root and render
const root = ReactDOM.createRoot(rootElement)

// Wrap the render in a try-catch to catch any rendering errors
try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} catch (error) {
  console.error('Error rendering app:', error)
  rootElement.innerHTML = `
    <div style="color: white; padding: 20px; text-align: center;">
      <h1>Something went wrong</h1>
      <p>Please check the console for more details.</p>
    </div>
  `
}
