import { useState, type FormEvent } from "react"
import { Project, Action } from "./Types"

import projectApi from "./api"

export default function Projects(props: {
    ProjectMutationHandlers: (action: Action, project: Project) => void;
    projects: Project[]
}) {
    const { projects = [], ProjectMutationHandlers } = props
    const [titleValid, setTitleValid] = useState(false)
    const [titleIsDirty, setTitleIsDirty] = useState(false)
    const [titleIsTouched, setTitleIsTouched] = useState(false)
    // const [projects, setProjects] = useState<Project[]>([])
    const [title, setTitle] = useState('')
    const [description, setDescription ] = useState('')
    const [ date, setDate] = useState('')

    const validateTitleInput = (title: string) => {
        if (titleIsTouched && titleIsDirty) {
            setTitleValid(title.trim().length > 2) 
        }
    }

    const addProject = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!title || !description || !date) return

        const form = event.target as HTMLFormElement | null
        if (!form) return
    

    const newProject = await projectApi.create({ title, description, date })
    console.log("Created project", newProject)
    if (newProject) {
        ProjectMutationHandlers("add", newProject)
    }
    reset()

}

const reset = () => {
    setTitle("")
    setDescription("")
    setDate("")
    setTitleIsDirty(false)
    setTitleIsTouched(false)
    setTitleValid(false)
}

const removeProject = async (project: Project) => {
    await projectApi.remove(project)
    ProjectMutationHandlers("remove", project)
}

const updateProject = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null
    if(!input) return
    setTitleIsDirty(true)
    setTitle(input.value)
}
const updateDescription = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null
    if(!input) return
    setDescription(input.value)
}
const updateDate = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null
    if(!input) return
    setDate(input.value)
}

return (
    <section>
        <h3>Add new Project</h3>
        <form onSubmit={addProject}>
            <label htmlFor="title">
            project name:
            <input type="text" 
            id="title" 
            name="title" 
            onChange={updateProject} 
            onFocus={() => {
                console.log("onFocus")
                setTitleIsTouched(true)
            }}
            onBlur={() => {
                console.log("onBlur")
                validateTitleInput(title)
            }}
            value = { title }
            />
            </label>
            <label htmlFor="description">
            description:
            <input type="text" 
            id="description" 
            name="description" 
            onChange={updateDescription}
            value = { description }
            />
            </label>
            <label htmlFor="date">
            date:
            <input type="date" 
            id="date" 
            name="date" 
            onChange={updateDate}
            value = { date }
            />
            </label>
            <button type="submit">Add</button>
            {!titleValid && titleIsDirty ? (
                <p className="warning">You need at least three letters</p>
            ) : null }
        </form>
        <h3>Projects:</h3>
        <ul>
            {projects.length === 0 ? (
                <li>No Projects</li>
            ) : (
                projects.map((project) => (
                    <li key={project.id}>
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                        <p>{project.date}</p>
                        <button onClick={() => removeProject(project)} type="button">
                        [-]
                        </button>
                    </li>
                ))
            )}
        </ul>
    </section>
)
}



//     const addProject = (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault()

//         if (!projectTitle.trim()) return 

//         const form = event.target as HTMLFormElement | null
//         if (!form) return

//         setProjects((prevProjects) => [
//             ...prevProjects,
//             { id: crypto.randomUUID(), title: projectTitle },
//         ])

//         setProjectTitle('')
//         setTitleIsDirty(false)
//         setTitleIsTouched(false)
//         setTitleValid(false)
//     }

//     const updateProjectTitle = (event: FormEvent<HTMLInputElement>) => {
//         const input = event.target as HTMLInputElement | null
//         if (!input) return
//         // setTitleIsDirty(true)
//         setProjectTitle(input.value)
//     }

//     const removeProject = (id: string) => {
//         setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id))
//     }

//     return (
//         <section>
//             <h2>Add a new project</h2>
//             {/* <pre>
//                 {JSON.stringify(
//                     { projects, titleValid, titleIsDirty, titleIsTouched },
//                     null,
//                     2
//                 )}
//             </pre> */}
//             <form onSubmit={addProject}>
//                 <label htmlFor='project'>
//                     Project name:
//                     <input
//                         type='text'
//                         id='project'
//                         name='project'
//                         onChange={updateProjectTitle}
//                         // onFocus={() => {
//                         //     setTitleIsTouched(true)
//                         // }}
//                         // onBlur={() => {
//                         //     validateTitleInput(projectTitle)
//                         // }}
//                         value={projectTitle}
//                     />
//                     {/* {!titleValid && titleIsDirty ? (
//                         <p className='warning'>Name has to be at least 3 characters long</p>
//                     ) : null} */}
//                     <input type='text' descripton='text' />
//                 </label>
//                 <button type='submit'>Add</button>
//             </form>
//             <ul>
//                 {projects.length === 0 ? (
//                     <li>You have no projects</li>
//                 ) : (
//                     projects.map((project) => (
//                         <li key={project.id}>
//                             <p>{project.title}</p>
//                             <button onClick={() => removeProject(project.id)} type="button">[-]</button>
//                         </li>
//                     ))
//                 )}
//             </ul>
//         </section>
//     )
// }