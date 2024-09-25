// // import { serve } from "@hono/node-server"
// import { Hono } from "hono"
// import { cors } from "hono/cors"
// import { projects } from "./data/projects"
// import type { ID } from "./types"
// // import { streaks } from "./data/streaks"

// const app = new Hono()

// app.use("/*", cors())

// app.get("/projects", async (c) => {
//     return c.json({
//         data: projects,
//     })
// })

// app.post("/projects", async (c) => {
//     const dataFromFrontend = await c.req.json<{title: string, description: string, date: string}>()

//     const created = {
//         id: crypto.randomUUID(),
//         title: dataFromFrontend.title,
//         categories: [],
//         description: dataFromFrontend.description,
//         date: dataFromFrontend.date,
//     }

//     projects.push(created)

//     return c.json(created, 201)

// })

// app.delete("/projects/:id", (c) => {
//     const id = c.req.param("id");
//     const index = projects.findIndex((h) => h.id === id) 

//     if(index === -1) {
//         return c.json(undefined, 404)
//     }

//     projects.splice(index, 1)
//     return c.json(undefined, 204)
// })




// export default app

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import type { Project } from "./types/index"
import { getParsedData, updateProjectData } from "./types/lib";
import type { Id } from "./types"


const app = new Hono()

app.use(
    cors({
        origin: "*",
    })
)

app.get("/", async (c) => {
    const data = await getParsedData()
    return c.json({ data })
})

app.get("/:id", async (c) => {
    const reqId = c.req.param("id")
    const data = await getParsedData()
    if (!reqId) return c.json({ error: "missing id"}, 404)
        const existing = data.find(
    (id) => id.id.toLowerCase() === reqId.toLowerCase()
)
if(!existing) return c.json({ error: "id not found"}, 404)
    return c.json({ data: existing})
})

app.post("/", async (c) => {
    const body = await c.req.json<Project>()
    if(!body.id) return c.json({ error: "id missing"}, 400)
        const data = await getParsedData()
    const hasId = data.some(
        (id) => id.id.toLowerCase() === body.id.toLowerCase()
    )
    if (hasId) return c.json({ error: "place alredy exists"}, 409)
        data.push(body)
    await updateProjectData(data)
    return c.json({data}, 201)
})

app.delete("/:id", async (c) => {
    const reqId = c.req.param("id")
    const data = await getParsedData()
    if (!reqId) return c.json({ error: "missing id"}, 400)
        const existing = data.find(
    (id) => id.id.toLowerCase() === reqId.toLowerCase()
)
if(!existing) return c.json({ error: "id not found"}, 409)

    if (existing.deleted) return c.json({error: "id already deleted"}, 409)
        const newData = data.map((project) => {
    if(project.id === reqId) {
        return { ...project, deleted: true}
    }
return project
})
await updateProjectData(newData)
return c.json({ data: newData})
})

const port = 3001
console.log(`server is running ish on port ${port}`)

serve({
    fetch: app.fetch,
    port: 3001
})