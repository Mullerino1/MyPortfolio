import React from "react"
import { Link } from "react-router-dom"


export default function Navbar() {
    
    return(
       <nav>
        <ul>
        <li className="My-Page">
                <Link to={`/home`}>Home</Link>
            </li>
            <li className="My-Projects">
                <Link to={`/projects`}>Welcome</Link>
            </li>
            <li className="Contact-Me">
                <Link to={`/contact`}>Contact</Link>
            </li>
           
        </ul>
       
       </nav>
        
    )
}