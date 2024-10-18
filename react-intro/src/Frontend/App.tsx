
// import { useState } from "react";
// import Layout from "./Components/Layout";
// import ProjectPage from "./pages/ProjectPage";
// import FrontPage from "./pages/Frontpage";


// function App(){
//   const [page, setPage] = useState("projects")

//   const pages = {
//     projects: <ProjectPage />,
//     frontpage: <FrontPage />,
//   }



// return(

//   <Layout>
//     <nav>
//       <button type="button" onClick={() => setPage("projects")}>
//         My Projects
//       </button>
//       <button type="button" onClick={() => setPage("frontpage")}>
//         Frontpage
//       </button>
//     </nav>
    
//   </Layout>
// )

// }

// export default App
import Welcome from "./Components/Welcome";
import Layout from "./Components/Layout";
import type { PropsWithChildren } from "react";
import Direction from "./Components/Direction";
import Project from "./Components/Projects";
// import type { Project as ProjectType } from "../Components/Types";
import useProjects from "./hooks/useProjects";
import FrontPage from "./pages/Frontpage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./Components/Contact";

// const user = {
//   name: "Alfred",
//   age: 20,
// }

// type AppProps = PropsWithChildren

export default function App() {
  // const { children } =  props
 


  return (
    <Layout>
      {/* <Welcome user={user} />
      <Direction>{children}</Direction>
      <FrontPage /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='projects' element={<ProjectPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    

    </Layout>
  )
}

