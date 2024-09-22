import { useState, type FormEvent } from "react"
import Streak from "./Streak"

export default function MyForm(Props: {
    ProjectMutationHandlers: (action: Action, project: Project) => void
    projects: Project[]
}) {
    const [titleValid, setTitleValid] = useState(false)
    const [titleIsDirty, setTitleIsDirty] = useState(false)
    const [titleIsTouched, setTitleIsTouched] = useState(false)
    const [projects, setProjects] = useState<Project[]>([])
    const [projectTitle, setProjectTitle] = useState('')

    // <
    // { id: ReturnType<typeof crypto.randomUUID>; projects: string }[]>([])

    const validateTitleInput = (title: string) => {
        if (titleIsTouched && titleIsDirty){
            setTitleValid(projects.trim().length > 2)
        }
    }

    const addProject = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!projects) return

        const form = event.target as HTMLFormElement | null

        if (!form) return

        // ProjectMutationHandlers('add', { id: crypto.randomUUID(), project})
        ProjectMutationHandlers('add', { id: crypto.randomUUID(), title: projects })


        // setProjects((prevProjects) => [
        //     ...prevProjects,
        //     { id: crypto.randomUUID(), projects },
        // ])

        setProjectTitle('')
        setTitleIsDirty(false)
        setTitleIsTouched(false)
        setTitleValid(false)
    }

    // const removeProject = (project: Project) => {
    //     ProjectMutationHandlers('remove', project)
    // }

    const updateProjectTitle = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement | null
        if (!input) return
        setTitleIsDirty(true)
        setProjectTitle(input.value)
    }

    // const removeProject = (id: string) => {
    //     setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id))
        const removeProject = (project: Project) => {
            setProjects(prevProjects => prevProjects.filter(p => p.id !== project.id))
        }
        
    // }
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
                onChange={updateProjectTitle}
                onFocus={() => {
                    console.log('onFocus')
                    setTitleIsTouched(true)
                }}
                onBlur={() => {
                    console.log('onBlur')
                    validateTitleInput(projects)
                }}
                value={projectTitle}
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