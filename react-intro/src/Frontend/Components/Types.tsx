export type Id = ReturnType<typeof crypto.randomUUID>

export type Project = {
    id: string
    title: string
    description: string
    deleted?: boolean
    date?: Date
}


export const actions = {
    add: 'add',
    remove: 'remove',
}

export type Action = (typeof actions)[keyof typeof actions];



