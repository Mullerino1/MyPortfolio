
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


const user = {
  name: "Alfred",
  age: 20,
}

type AppProps = PropsWithChildren

export default function App(props: AppProps) {
  const { children } =  props
 


  return (
    <Layout>
      <Welcome user={user} />
      <Direction>{children}</Direction>
      <FrontPage />
    

    </Layout>
  )
}

