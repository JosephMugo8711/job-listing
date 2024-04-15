import React from 'react'
import ReactDOM from 'react-dom/client' // Allows me to work with document object model / browser
import App from './App.jsx'
import './index.css'

//  This is the entry point of our application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Createroot  is passed in an element
  // select root element by id
  // Call the render method and render anything in our case we render app
  // React. strictmode - wrapper component that will check for potential problems in our app eg unsaved lifecycle methods
  // We assert app into the root using render method
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
