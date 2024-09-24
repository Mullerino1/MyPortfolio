export type Id = ReturnType<typeof crypto.randomUUID>

export type Project = {
    id: Id;
    title: string;
    description: string;
    createdAt: string;
}

export type Streak = {
    id: Id;
    projectId: Id;
    streakCount: number;
}

export const actions = {
    add: 'add',
    remove: 'remove',
}

export type Action = (typeof actions)[keyof typeof actions];