import type { Project } from "./Types";

type ProjectIdeaProps = {
    projectData: Pick<Project, "id" | "title" | "description" | "deleted" >[]
    handleRemoveProject: (title: string) => void
}

export default function ProjectIdea(props: Readonly<ProjectIdeaProps>) {
    const { projectData, handleRemoveProject} = props
    if(!projectData) return null


return (
    <section className="project-ideas" data-testid="project-idea">
        <h2>Your Projects</h2>
        {projectData.length > 0 ? (
            <article>
                {projectData.map((projectItem) => (
                    <section key={projectItem.id}>
                        
                            <h2>{projectItem.title}</h2>
                            <p>{projectItem.description}</p>
                            {projectItem.deleted ? (
                            <p>[DELETED</p>
                        ) : (
                            <button type="button" onClick={() => handleRemoveProject(projectItem.id)}
                            >
                                Remove
                            </button>
                        )}
                    </section>
                ))}
            </article>
        ) : (
            <p>No data</p>
        )}
    </section>
)

}