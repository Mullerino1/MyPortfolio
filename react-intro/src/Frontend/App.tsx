import './Styling/Styling.scss'
import { useState, useEffect } from 'react'
import Welcome from './Components/Welcome'
import React from 'react'
import Projects from './Components/Projects'
import { ofetch } from 'ofetch'
// import { Action, Project } from './Components/Types'


function App() {


  const data = ofetch("http://localhost:3000/projects")
  console.log('console log i app')
  const [projects, setProjects] = useState<Projects[]>([]);

  const ProjectMutationHandlers = (action: Action, project: Project) => {
    switch (action) {
      case 'add':
      add(project)
      break;
      case 'remove':
      remove(project.id)
      break
      default:
      break

    }
  }

  // const handlers = {
  //   add,
  //   remove
  // }

  const add = (project: projectType) => {
    setProjects((prev) => [...prev, project])
    // setStreaks((prev) => [
    //   ...prev,
    //   { id: crypto.randomUUID(), projectId: project.id, streakCount: 0},
    // ])
  }

  const remove = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id))
    // setStreaks((prev) => prev.filter((streak) => streak.projectId !== id))
  }
  

 const user = {
  name : 'mullerino',
  age: 20,
 }

//   const initialStreaks = [
//     { id: '123', projectId: '1', streakCount: 10},
//     { id: '234', projectId: '2', streakCount: 5},
//   ]

//   const [streaks, setStreaks] = useState(initialStreaks)


//   const updateStreakCount = (id: string) => {
//     setStreaks((prevStreaks) => {
//       return prevStreaks.map((streak) => {
//         if (streak.id === id) {
//           return { ...streak, streakCount: streak.streakCount + 1}
//         } 
//         return streak
//       })
//     })
//   }

//   const totalStreaks = () => {
//     let total = 0
//     for (const streak of streaks) {
//       total += streak.streakCount
//     }
//     return total
//  }


  return(
    <React.Fragment>
      <Welcome user = {user} />
      {/* <Streaks 
      streaks={streaks}
      updateStreakCount = {updateStreakCount}
      total={totalStreaks()}
      /> */}
      <Projects projects={projects} ProjectMutationHandlers={ProjectMutationHandlers}/>
    </React.Fragment>
  )
}

export default App;