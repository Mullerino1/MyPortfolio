import { useState, type FormEvent } from "react"

export default function MyForm(Props: {
    ProjectMutationHandlers: (action: Action, project: Project) => void
    projects: project[]
}) {
    const [titleValid, setTitleValid] = useState(false)
    const [titleIsDirty, setTitleIsDirty] = useState(false)
    const [titleIsTouched, setTitleIsTouched] = useState(false)
    const [projects, setProjects] = useState('')
    // <
    // { id: ReturnType<typeof crypto.randomUUID>; projects: string }[]>([])

    const validateTitleInput = (projects: string) => {
        if (titleIsTouched && titleIsDirty){
            setTitleValid(projects.trim().length > 2)
        }
    }

    const addProject = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!projects) return

        const form = event.target as HTMLFormElement | null

        if (!form) return

        ProjectMutationHandlers('add', { id: crypto.randomUUID(), projects})

        // setProjects((prevProjects) => [
        //     ...prevProjects,
        //     { id: crypto.randomUUID(), projects },
        // ])

        setProjects('')
        setTitleIsDirty(false)
        setTitleIsTouched(false)
        setTitleValid(false)
    }

    const removeProject = (project: Project) => {
        ProjectMutationHandlers('remove', project)
    }

    const updateProjects = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement | null
        if (!input) return
        setTitleIsDirty(true)
        setProjects(input.value)
    }

    const removeProject = (id: string) => {
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id))
    }
    //     const form = event.target as HTMLFormElement | null

    //     if (!form) return

    //     const formData = new FormData(form)
    //     const title = formData.get('project')
    //     if(!title || typeof title !== 'string') return

    //     setProjects((prevProjects) => [
    //         ...prevProjects,
    //         {id: crypto.randomUUID(), title },
    //     ])

    //     form.reset()
    // }

    return(
        <section>
            <h2>Add a new project</h2>
            <pre>
                {JSON.stringify(
                    {projects, titleValid, titleIsDirty, titleIsTouched},
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
                onChange={updateProjects}
                onFocus={() => {
                    console.log('onFocus')
                    setTitleIsTouched(true)
                }}
                onBlur={() => {
                    console.log('onBlur')
                    validateTitleInput(projects)
                }}
                value={projects}
                />
                {!titleValid && titleIsDirty ? (
                    <p className='warning'>Name has to be at least 3 signs long</p>
                ) : null }

                </label>
                <button type='submit'>Add</button>
           
            
        </form>
        <ul>
            {projects.length === 0? (
                <li>You have no projects</li>
            ): (
            projects.map((project) => (
                <li key={project.id}>
                    <p>{project.title}</p>
                    <button onClick={() => removeProject(project.id)} type='button'>
                        [-]
                    </button>
                </li>
            ))
            )}
        </ul>
        </section>
    )
}