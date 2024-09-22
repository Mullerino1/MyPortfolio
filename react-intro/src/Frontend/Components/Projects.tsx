import { useState, type FormEvent } from "react"
import { Project, Action } from "./Types"

export default function Projects(props: {
    ProjectMutationHandlers: (action: Action, project: Project) => void;
    projects: Project[]
}) {
    const [titleValid, setTitleValid] = useState(false)
    const [titleIsDirty, setTitleIsDirty] = useState(false)
    const [titleIsTouched, setTitleIsTouched] = useState(false)
    const [projects, setProjects] = useState<Project[]>([])
    const [projectTitle, setProjectTitle] = useState('')

    const validateTitleInput = (title: string) => {
        if (titleIsTouched && titleIsDirty) {
            setTitleValid(title.trim().length > 2) 
        }
    }

    const addProject = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!projectTitle.trim()) return 

        const form = event.target as HTMLFormElement | null
        if (!form) return

        setProjects((prevProjects) => [
            ...prevProjects,
            { id: crypto.randomUUID(), title: projectTitle },
        ])

        setProjectTitle('')
        setTitleIsDirty(false)
        setTitleIsTouched(false)
        setTitleValid(false)
    }

    const updateProjectTitle = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement | null
        if (!input) return
        setTitleIsDirty(true)
        setProjectTitle(input.value)
    }

    const removeProject = (id: string) => {
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id))
    }

    return (
        <section>
            <h2>Add a new project</h2>
            <pre>
                {JSON.stringify(
                    { projects, titleValid, titleIsDirty, titleIsTouched },
                    null,
                    2
                )}
            </pre>
            <form onSubmit={addProject}>
                <label htmlFor='project'>
                    Project name:
                    <input
                        type='text'
                        id='project'
                        name='project'
                        onChange={updateProjectTitle}
                        onFocus={() => {
                            setTitleIsTouched(true)
                        }}
                        onBlur={() => {
                            validateTitleInput(projectTitle)
                        }}
                        value={projectTitle}
                    />
                    {!titleValid && titleIsDirty ? (
                        <p className='warning'>Name has to be at least 3 characters long</p>
                    ) : null}
                </label>
                <button type='submit'>Add</button>
            </form>
            <ul>
                {projects.length === 0 ? (
                    <li>You have no projects</li>
                ) : (
                    projects.map((project) => (
                        <li key={project.id}>
                            <p>{project.title}</p>
                            <button onClick={() => removeProject(project.id)} type="button">[-]</button>
                        </li>
                    ))
                )}
            </ul>
        </section>
    )
}