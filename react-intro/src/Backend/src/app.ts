// import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { projects } from "./data/projects"
import type { ID } from "./types"
// import { streaks } from "./data/streaks"

const app = new Hono()

app.use("/*", cors())

app.get("/projects", async (c) => {
    return c.json({
        data: projects,
    })
})

app.post("/projects", async (c) => {
    const dataFromFrontend = await c.req.json<{title: string, description: string, createdAt: number}>()

    const created = {
        id: crypto.randomUUID(),
        title: dataFromFrontend.title,
        createdAt: dataFromFrontend.createdAt,
        categories: [],
        description: dataFromFrontend.description,
    }

    projects.push(created)
    // streaks.set(created.id, {
    //     id: crypto.randomUUID(),
    //     projectId: created.id,
    //     streakCount: 0,

    // })
    return c.json(created, 201)

})

app.delete("/projects/:id", (c) => {
    const id = c.req.param("id") as ID
    const index = projects.findIndex((h) => h.id === id) 

    if(index === -1) {
        return c.json(undefined, 404)
    }

    projects.splice(index, 1)
    // streaks.delete(id)
    return c.json(undefined, 204)
})

// app.get("/streaks", async (c) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     return c.json({
//         data: Array.from(streaks.values())
//     })
// })

// app.patch("/projects/:id/streaks", async (c) => {
//     const id = c.req.param("id") as ID
//     const streak = streaks.get(id)
//     if (!streak) return c.json(undefined, 404)
//         const updatedStreak = { ...streak, streakCount: streak.streakCount + 1}
//     streaks.set(id, updatedStreak)
//     return c.json(updatedStreak)
// })


export default app

