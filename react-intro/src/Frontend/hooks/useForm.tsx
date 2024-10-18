import { useState, type FormEvent } from "react"

type FormData = Project

type FormProps = {
    createProjectData: (data: FormData) => void
}

const isValid = ({ id, title, description}: FormData) =>{
    return (
      id &&
      id.length > 2 &&
        title &&
        description 
    
        
    )
}

export default function Project({createProjectData}: Readonly<FormProps>){
    const [data, setData] = useState<FormData>({
        id: "",
        title: "",
        description: "",
    })

    const [isDirty, setDirty] = useState(false)

    const showError = !isValid(data) && isDirty

    const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target?.id
        if (id && Object.keys(data).includes(id)) {
            setDirty(true)
            setData((prev) => ({ ...prev, [id]: event.target.value }))
        }
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(isValid(data)) {
            createProjectData(data)
            console.log('success', data)
            setData({
                id: "",
                title: "",
                description: "",
            })
        }
    }