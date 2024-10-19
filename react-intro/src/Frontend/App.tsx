import Layout from "./Components/Layout";
import FrontPage from "./pages/Frontpage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./Components/Contact";



export default function App() {
 


  return (
    <Layout>
    
    <header>
      <h1>Mullerino's Portfolio</h1>
    </header>
     

      <Navbar />
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='projects' element={<ProjectPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    

    </Layout>
  )
}

