
import { useState, type PropsWithChildren } from "react";
import ProjectForm from "./ProjectInfo";
import type { HandleProject, Project } from "./Types";
import { formatDistance, formatCreatedAt } from "../Features/Helpers/format";

type ProjectProps = {
  handleProjectMutation: HandleProject
  projects: Project[]
}

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
    console.log("onsubmit works")
    if (id){
      console.log(data)
       return handleProjectMutation({ action: "update", id, project: data })
    } 

    return handleProjectMutation({ action: "add", project: data })
  }

  const removeProject = (id: string) => {
    handleProjectMutation({ action: "remove", id })
  }

  return (
    <>
      <form className="form">
        <section className="project-ideas">
          <h2>Your Projects:</h2>
          {children}
          <article>
            {projects.length === 0 ? (
              <p>You have no projects</p>
            ) : (
              projects.map((project) => {
                const projectDate = new Date(project.createdAt)
                
                const dateDistance = isNaN(projectDate.getTime())
                  ? "Invalid date"
                  : formatDistance(projectDate)

                const formattedDate = isNaN(projectDate.getTime())
                  ? "Invalid date"
                  : formatCreatedAt(projectDate)

                return (
                  <section key={project.id} className="project-card">
                    <article>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>{project.status}</p>
                    {/* <p>{project.categories}</p> */}
                    <p>Created: {formattedDate} which is {dateDistance}</p>
                    <p>{project.visibility}</p>
                    {project.deleted ? (
                      <p>[DELETED]</p>
                    ) : (
                      <button onClick={() => removeProject(project.id)} type="button">
                        [remove]
                      </button>
                    )}
                    <button onClick={() => editProject(project)} type="button">
                      [{editing?.id === project.id ? "close" : "edit"}]
                    </button>
                    </article>
                  </section>
                )
              })
            )}
          </article>
        </section>
      </form>
      <ProjectForm key={editing?.id} onSubmit={onSubmit} project={editing} />
    </>
  )
}
