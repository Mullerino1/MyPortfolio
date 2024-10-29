// export type ID = ReturnType<typeof crypto.randomUUID>
export type Id = ReturnType<typeof crypto.randomUUID>


export type Project = {
    id: Id
    title: string
    description?: string
    categories: string[]
    createdAt: Date
    endedAt?: Date | null
    publishedAt?: Date | null
    deleted?: boolean
    public?: boolean
    status?: string
}

// export type ToProjectDomain = Project & {public?: "true"}

export type ToProjectDomain = Project & { deleted?: "true", public?: "true", status?: "true"}