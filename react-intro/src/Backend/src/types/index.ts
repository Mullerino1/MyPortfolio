// export type ID = ReturnType<typeof crypto.randomUUID>
export type Id = ReturnType<typeof crypto.randomUUID>


export type Project = {
    id: Id
    title?: string
    description?: string
    date: Date
    // publishedAt?: Date | null
    deleted?: boolean
    // tags: string[]
    // public?: boolean
    // status?: boolean
}

export type ToProjectDomain = Project & { deleted?: "true"}