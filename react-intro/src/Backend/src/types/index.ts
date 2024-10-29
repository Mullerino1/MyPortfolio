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
    visibility?: string
    status?: string
}

// export type ToProjectDomain = Project & {public?: "true"}

export type ToProjectDomain = Project & { deleted?: "true", visibility?: "true", status?: "true"}