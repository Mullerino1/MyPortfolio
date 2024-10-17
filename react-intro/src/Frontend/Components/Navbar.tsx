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
    const [page, setPage] = useState("projects")

    const pages = {
  projects: <ProjectPage />,
  frontpage: <FrontPage />,
}
    
    return(
        <nav>
      <button type="button" onClick={() => setPage("projects")}>
        My Projects
      </button>
      <button type="button" onClick={() => setPage("frontpage")}>
        Frontpage
      </button>
    </nav>
        
    )
}