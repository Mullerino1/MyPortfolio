import { useState, type PropsWithChildren } from "react";

import ProjectForm from "./ProjectInfo";
import type { HandleProject, Project } from "./Types";

type ProjectProps = {
  handleProjectMutation: HandleProject
  projects: Project[]
//   renderStreak: (
//     project: Project
//   ) => React.ReactElement | React.ReactElement[] | null;
}

// TODO: Context
export default function Projects(
  props: Readonly<PropsWithChildren<ProjectProps>>
) {
  const { projects = [], handleProjectMutation, children } = props

  const [editing, setEditing] = useState<Project | undefined>(undefined)

  const editProject = (project: Project) => {
    if (editing?.id === project.id) return setEditing(undefined)
    setEditing(project)
  }

  const onSubmit = (id: string | undefined, data: Partial<Project>) => {
    if (id) return handleProjectMutation({ action: "update", id, project: data })
    return handleProjectMutation({ action: "add", project: data })
  }

  const removeProject = (id: string) => {
    handleProjectMutation({ action: "remove", id })
  }

  return (
    <>
    <form className="form">
      <section className="list">
        <h3 className="mb-4">Your Projects:</h3>
        {children}
        <article>
          {projects.length === 0 ? (
            <li>Du har ingen vaner</li>
          ) : (
            projects.map((project) => (
              <li key={project.id} className="habit-card">
                <header>
                    
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                            {project.deleted ? (
                            <p>[DELETED]</p>
                        ) : (
                            
                            // <button type="button" onClick={() => removeProject(project.id)}>
                            //     Remove
                            // </button>
                            <button
                            onClick={() => removeProject(project.id)}
                            type="button"
                            className="ml-2 error"
                          >
                            [del]
                          </button>
                            
                             )}

                  <button
                    onClick={() => editProject(project)}
                    type="button"
                    className="ml-auto outline"
                  >
                    [{editing?.id === project.id ? "lukk" : "endre"}]
                  </button>
                 
                  
                </header>
              </li>
            ))
          )}
        </article>
      </section>
      </form>
      {/* Triks for å trigge recreate - useReducer oppdaterer ikke state ved rerender */}
      <ProjectForm key={editing?.id} onSubmit={onSubmit} project={editing} />
    </>
  )
}


//<section className="project-ideas" data-testid="project-idea">
//         <h2>Your Projects</h2>
//         {projectData.length > 0 ? (
//             <article>
//                 {projectData.map((projectItem) => (
//                     <section key={projectItem.id}>
                        
//                             <h2>{projectItem.title}</h2>
//                             <p>{projectItem.description}</p>
//                             {projectItem.deleted ? (
//                             <p>[DELETED</p>
//                         ) : (
//                             <button type="button" onClick={() => handleRemoveProject(projectItem.id)}
//                             >
//                                 Remove
//                             </button>
//                         )}
//                     </section>
//                 ))}
//             </article>
//         ) : (
//             <p>No data</p>
//         )}
//     </section>

// import { useProjectForm } from "../hooks/useProjectForm";
// import type { Project } from "./Types";



// type FormProps = {
//     createProjectData: (data: Project) => void
    
// }


// export default function Project({createProjectData}: Readonly<FormProps>){
//     const { data, showError, handleData, handleFormSubmit, isValid } = useProjectForm(createProjectData)
   
// return (
//     <form className="form" onSubmit={handleFormSubmit}>
//         <section>
//         <label htmlFor="title">Project Name:</label>
//             <input 
//             id="title"
//             type="text"
//             name="title"
//             placeholder="Your title here"
//             required
//             onChange={handleData}
//             value={data.title}
//             />
//         </section>
//         <section>
//         <label htmlFor="description">Describe your project:</label>
//             <input 
//             id="description"
//             type="text"
//             name="description"
//             placeholder="Describe your project"
//             required
//             onChange={handleData}
//             value={data.description}
//             />
//         </section>
//         <section>
//         <label htmlFor="id">Id LOL:</label>
//             <input 
//             id="id"
//             type="text"
//             name="id"
//             required
//             onChange={handleData}
//             value= {data.id}
//             />
//         </section>
        
//         {showError ? (
//             <span className="error" data-testid="error">
//                 Title needs at least three signs
                
//             </span>
//         ): null}
//         <button type="submit" disabled={!isValid}>
//             Add Project
//         </button>
//     </form>
// )
// }