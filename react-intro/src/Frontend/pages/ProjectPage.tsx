

// import React from "react";
// import Layout from "../Components/Layout";
// import Project from "../Components/Projects";
// import DeleteProject from "../Components/ProjectInfo";
// import useProjects from "../hooks/useProjects"; // Import the custom hook
// import '../Styling/ProjectPageS.scss'
// import { useEffect, useState } from "react";
// // import type { Project as ProjectType } from "../Components/Types";
// import type { HandleProject, Project as ProjectType } from "../Components/Types"
// import useProjectForm from "../hooks/useProjectForm";




// //move just about all previous information into the useProjects hook :D
// function ProjectPage() {
//   const { remove, add, update, status, get, data, error } = useProjects()
//   // const { fields, handleSubmit, getInputProjectProps, isFieldInvali } = useProjectForm

//   const projects = data

//   const handleProjectMutation: HandleProject = (props) => {
//     const { action } = props;

//     switch (action) {
//       case "add":
//         add(props.project);
//         break;
//       case "remove":
//         remove(props.id);
//         break;
//       case "update":
//         update(props.id, props.project);
//         break;
//       default:
//         break;
//     }
//   };
  


//   return (
//     <Layout>
      
//       <main>

//         <section>
//           {/* I could move the project file to be here instead of its own file so i dont have another step between all this but im not sure */}
//         </section>
//         <section className="column1">
//       <Project createProjectData={createProjectData} />
//       <DeleteProject projectData={projectData} handleRemoveProject={handleRemoveProject} />
//       </section>
//       </main>
//     </Layout>
//   )
// }

// export default ProjectPage


// // import { useEffect, useState } from "react";
// // import type { Project as ProjectType } from "../Components/Types";
// // // import Title from "./Components/Title";
// // import Layout from "../Components/Layout";
// // import Project from "../Components/Projects";
// // import useProjects from "../hooks/useProjects"; // Import the custom hook
// // import '../Styling/FrontPageS.scss'


// // function FrontPage(){
// //   const { projectData, createProjectData } = useProjects();


// // return(

// //   <Layout>
    
    
// // <main>
// //    <figcaption>
// //       <div className="container">
// //       <img src="src/Frontend/img/PFPIzumi.png" alt="Profile picture of an anime character" className="image"/>
// //       {/* <div className="overlay">
// //         <img src="src/Frontend/img/Me.jpg" alt="Profile picture of an anime character" className="image_2" />
// //         </div> */}
// //       </div>
// //     </figcaption>
// //     <section>
// //     <ul>
// //         {projectData.map((project) => (
// //           <div key={project.id} className='project-card'>
// //             <h2>{project.title}</h2></div>
// //         ))}
// //       </ul>
// //       </section>
// //       </main>

// //   </Layout>
// // )

// // }

// // export default FrontPage



// import React from "react";
// import Layout from "../Components/Layout";
// import Project from "../Components/Projects";
// import DeleteProject from "../Components/ProjectInfo";
// import useProjects from "../hooks/useProjects"; // Import the custom hook
// import '../Styling/ProjectPageS.scss'
// import { useEffect, useState } from "react";
// // import type { Project as ProjectType } from "../Components/Types";
// import type { HandleProject, Project as ProjectType } from "../Components/Types"
// import useProjectForm from "../hooks/useProjectForm";




// //move just about all previous information into the useProjects hook :D
// function FrontPage() {
//   const { remove, add, update, status, get, data, error } = useProjects()
//   const { fields, handleSubmit, getInputProjectProps, isFieldInvali } = useProjectForm
  
//   const projects = data

//   const handleProjectMutation: HandleProject = (props) => {
//     const { action } = props;

//     switch (action) {
//       case "add":
//         add(props.project);
//         break;
//       case "remove":
//         remove(props.id);
//         break;
//       case "update":
//         update(props.id, props.project);
//         break;
//       default:
//         break;
//     }
//   };
  


//   return (
//     <Layout>
      
//       <main>

//         <section>
//           {/* I could move the project file to be here instead of its own file so i dont have another step between all this but im not sure */}
//         </section>
//         <section className="column1">
//       <Project createProjectData={createProjectData} />
//       <DeleteProject projectData={projectData} handleRemoveProject={handleRemoveProject} />
//       </section>
//       </main>
//     </Layout>
//   )
// }

// export default FrontPage

// import { ofetch } from "ofetch";

// import Habits from "../components/Habits";

// import Streak from "@/features/streaks/components/Streak";
// import StreakTotal from "@/features/streaks/components/StreakTotal";
// import useHabits from "../hooks/useHabits";
// import type { Habit, HandleMutation } from "../types";

// import React from "react";
// import Layout from "../Components/Layout";
// import Project from "../Components/Projects";
// import DeleteProject from "../Components/ProjectInfo";
// import useProjects from "../hooks/useProjects"; // Import the custom hook
// import '../Styling/ProjectPageS.scss'
// import { useEffect, useState } from "react";
// // import type { Project as ProjectType } from "../Components/Types";
// import type { HandleProject, Project as ProjectType } from "../Components/Types"
// import useProjectForm from "../hooks/useProjectForm";

// export default function ProjectPage() {
//   const { add, remove, update, status, get, data, error } = useProjects();
//   const projects = data;

//   const handleProjectMutation: HandleProject = (props) => {
//     const { action } = props;

//     switch (action) {
//       case "add":
//         add(props.project);
//         break;
//       case "remove":
//         remove(props.id);
//         break;
//       case "update":
//         update(props.id, props.project);
//         break;
//       default:
//         break;
//     }
//   };

//   const addProjectServer = async (id: string) => {
//     try {
//       return fetch("http://localhost:3000", {
//         method: "POST",
//         credentials: "include",
//         body: JSON.stringify({
//           note: "",
//           projectId: id,
//         }),
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addProject = async (id: string) => {
//     const updatedStreak = await addProjectServer(id);

//     if (!updatedStreak) return;

//     await get();
//   };

  

//   if (status.loading) return <p>Laster ...</p>;
//   if (status.error) return <p className="error">{error}</p>;

//   return (
//     <>
//       <Project
//         projects={projects}
//         handleProjectMutation={handleProjectMutation}
//         renderStreak={(project) => {
//           // const streaks = project.streaks;

         
//         }}
//       >
//         {/* <StreakTotal
//           streakCount={habits.length}
//           // streakCount={streaks.length}
//           totalStreak={calculateTotalStreaks()}
//         /> */}
//         {/* <pre>{JSON.stringify(status)}</pre> */}
//       </Project>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
// import Layout from "../Components/Layout";
import Project from "../Components/Projects";
// import DeleteProject from "../Components/ProjectInfo";
import useProjects from "../hooks/useProjects"; // Import the custom hook
import '../Styling/ProjectPageS.scss';
import type { HandleProject, Project as ProjectType } from "../Components/Types";
// import useProjectForm from "../hooks/useProjectForm";



export default function ProjectPage() {
  const { add, remove, update, status, get, data, error } = useProjects()
  const projects = data

  const handleProjectMutation: HandleProject = (props) => {
    const { action } = props

    switch (action) {
      case "add":
        add(props.project)
        break
      case "remove":
        remove(props.id)
        break
      case "update":
        update(props.id, props.project)
        break
      default:
        break
    }
  }

  const addProjectServer = async (id: string) => {
    try {
      return fetch("http://localhost:3000", {
        method: "POST",
        body: JSON.stringify({
          note: "",
          projectId: id,
        }),
      })
    } catch (error) {
      console.error(error)
    }
  }

  const addProject = async (id: string) => {
    const result = await addProjectServer(id)
    if (!result) return

    await get()
  }

  if (status.loading) return <p>Laster ...</p>
  if (status.error) return <p className="error">{error}</p>

  return (
    <>
      <Project
        projects={projects}
        handleProjectMutation={handleProjectMutation}
        
      >
      </Project>
    </>
  )
}

