import { useState } from "react"

export default function MyForm() {
    const [name, setName] = useState('')
    return(
        <form>
            <label>Project Name:
                <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </label>
        </form>
    )
}