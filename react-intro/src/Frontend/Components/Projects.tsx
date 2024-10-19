import { useProjectForm } from "../hooks/useProjectForm";
import type { Project } from "./Types";



type FormProps = {
    createProjectData: (data: Project) => void
}

// const isValid = ({ id, title, description}: FormData) =>{
//     return (
//       id &&
//       id.length > 2 &&
//         title &&
//         description 
    
        
//     )
// }

export default function Project({createProjectData}: Readonly<FormProps>){
    const { data, showError, handleData, handleFormSubmit, /*isValid*/ } = useProjectForm(createProjectData)
    // const [data, setData] = useState<FormData>({
    //     id: "",
    //     title: "",
    //     description: "",
    // })

    // const [isDirty, setDirty] = useState(false)

    // const showError = !isValid(data) && isDirty

    // const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const id = event.target?.id
    //     if (id && Object.keys(data).includes(id)) {
    //         setDirty(true)
    //         setData((prev) => ({ ...prev, [id]: event.target.value }))
    //     }
    // }

    // const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     if(isValid(data)) {
    //         createProjectData(data)
    //         console.log('success', data)
    //         setData({
    //             id: "",
    //             title: "",
    //             description: "",
    //         })
    //     }
    // }

    

   
return (
    <form className="form" onSubmit={handleFormSubmit}>
        <section>
        <label htmlFor="title">Project Name:</label>
            <input 
            id="title"
            type="text"
            name="title"
            placeholder="Your title here"
            required
            onChange={handleData}
            value={data.title}
            />
        </section>
        <section>
        <label htmlFor="description">Describe your project:</label>
            <input 
            id="description"
            type="text"
            name="description"
            placeholder="Describe your project"
            required
            onChange={handleData}
            value={data.description}
            />
        </section>
        <section>
        <label htmlFor="id">Id LOL:</label>
            <input 
            id="id"
            type="text"
            name="id"
            required
            onChange={handleData}
            value= {data.id}
            />
        </section>
        
        {showError ? (
            <span className="error" data-testid="error">
                Title needs at least three signs
                
            </span>
        ): null}
        <button type="submit" /*disabled={!isValid}*/>
            Add Project
        </button>
    </form>
)
}