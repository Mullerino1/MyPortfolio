import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './Frontend/App'
import "./Frontend/Styling/Styling.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
<Router>
<App />
</Router>,
)