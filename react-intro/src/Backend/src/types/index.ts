// export type ID = ReturnType<typeof crypto.randomUUID>
export type Id = ReturnType<typeof crypto.randomUUID>


export type Project = {
    id: Id
    title?: string
    description?: string
    deleted?: boolean
}

export type ToProjectDomain = Project & { deleted?: "true"}