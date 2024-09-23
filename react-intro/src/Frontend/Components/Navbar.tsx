import React from "react"
import { Link } from "react-router-dom"


export default function Navbar() {
    
    return(
       <nav>
        <ul>
        <li className="My-Page">
                <Link to={`/App`}>Home</Link>
            </li>
            <li className="My-Projects">
                <Link to={`/Welcome`}>Welcome</Link>
            </li>
            <li className="Contact-Me">
                <Link to={`/Contact`}>Contact</Link>
            </li>
           
        </ul>
       
       </nav>
        
    )
}