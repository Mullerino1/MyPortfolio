import type { Project } from "./Types";

type ProjectIdeaProps = {
    projectData: Pick<Project, "id" | "title" | "description" | "deleted">[]
    handleRemoveProject: (title: string) => void
}

export default function ProjectIdea(props: Readonly<ProjectIdeaProps>) {
    const { projectData, handleRemoveProject} = props
    if(!projectData) return null


return (
    <section className="project-ideas" data-testid="project-idea">
        <h2>Your Projects</h2>
        {projectData.length > 0 ? (
            <ul>
                {projectData.map((projectItem) => (
                    <li key={projectItem.id}>
                        <div>
                            <span>{projectItem.id}</span>
                            <span>{projectItem.title}</span>
                            <span>{projectItem.description}</span>
                        </div>
                        {projectItem.deleted ? (
                            <p>[DELETED</p>
                        ) : (
                            <button type="button" onClick={() => handleRemoveProject(projectItem.id)}
                            >
                                Remove
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No data</p>
        )}
    </section>
)

}