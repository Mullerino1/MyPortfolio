import { Route, Routes } from 'react-router-dom'
// import Layout from './Components/Layout'
// import Home from './Components/Home'
import './Styling/Styling.scss'
import MyForm from './Components/Projects'

// function App() {
//   return (
//     <>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Home" element={<Home />} />
//           {/* <Route path="/Contact" element={<Contact />} />
//           <Route path="/Projects" element={<Projects />} /> */}
//         </Routes>
//       </Layout>
//     </>
//   )
// }

// export default App


function App() {
  console.log('console log i app')

  return(
    <main>
      <MyForm />
    </main>
  )
}

export default App()