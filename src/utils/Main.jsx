import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProviderWrapper } from '../context/auth.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <React.StrictMode>
             <AuthProviderWrapper> 
                <App />
             </AuthProviderWrapper> 
        </React.StrictMode>
    </Router>
)