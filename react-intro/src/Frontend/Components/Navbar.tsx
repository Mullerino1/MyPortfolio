import React from "react"
import ProjectPage from "../pages/ProjectPage";
import FrontPage from "../pages/Frontpage";
import { useState } from "react";

// 

// const pages = {
//   projects: <ProjectPage />,
//   frontpage: <FrontPage />,
// }



// return(

// <Layout>
//   <nav>
//     <button type="button" onClick={() => setPage("projects")}>
//       My Projects
//     </button>
//     <button type="button" onClick={() => setPage("frontpage")}>
//       Frontpage
//     </button>
//   </nav>


export default function Navbar() {
   
    
    return(
        <nav>
     <ul>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/projects'>My Projects</a>
      </li>
      <li>
        <a href='/contact'>Contact Me</a>
      </li>
     </ul>
    </nav>
        
    )
}