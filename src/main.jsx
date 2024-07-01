import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithHistory from './Components/auth0-provider-with-history.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
{/* <Auth0ProviderWithHistory> */}
      <App />
    {/* </Auth0ProviderWithHistory> */}
</BrowserRouter>
  
)
