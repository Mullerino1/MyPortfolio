import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './Frontend/App'
import Layout from './Frontend/Components/Layout'

ReactDOM.createRoot(document.getElementById('root')!).render(
<Router>
<App />
</Router>,
)