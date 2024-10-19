export type Id = ReturnType<typeof crypto.randomUUID>

export type Project = {
    id: string
    title: string
    description: string
    deleted?: boolean
}



