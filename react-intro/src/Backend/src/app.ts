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
    const dataFromFrontend = await c.req.json<{title: string, description: string, date: string}>()

    const created = {
        id: crypto.randomUUID(),
        title: dataFromFrontend.title,
        categories: [],
        description: dataFromFrontend.description,
        date: dataFromFrontend.date,
    }

    projects.push(created)

    return c.json(created, 201)

})

app.delete("/projects/:id", (c) => {
    const id = c.req.param("id");
    const index = projects.findIndex((h) => h.id === id) 

    if(index === -1) {
        return c.json(undefined, 404)
    }

    projects.splice(index, 1)
    return c.json(undefined, 204)
})




export default app