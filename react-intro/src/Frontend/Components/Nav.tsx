import React from "react"
import { Link } from "react-router-dom"
import Title from "./Title"


export default function Navbar() {
  
    return (
        <nav>
            <Title />
            <ul> 
                <li className="what-to-see">
                    <Link to="/Home">Home</Link> 
                </li>
                <li>  
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
            </ul>
        </nav>
    )
}