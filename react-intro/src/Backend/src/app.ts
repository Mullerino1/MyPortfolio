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

    return c.json(created, 201)

})

app.delete("/projects/:id", (c) => {
    const id = c.req.param("id") as ID
    const index = projects.findIndex((h) => h.id === id) 

    if(index === -1) {
        return c.json(undefined, 404)
    }

    projects.splice(index, 1)
    return c.json(undefined, 204)
})




export default app

// import {serve} from "@hono/node-server"
// import { Hono } from "hono"
// import { cors } from "hono/cors"
// import { getProjectData, updateProjectData } from "./lib"
// import type { Project } from "./types"

// const app = new Hono()

// app.use(
//     cors({
//         origin: "*",
//     })
// )

// app.get("/", async (c) => {
//     const data = await getProjectData()
//     return c.json({ data })
// })

// app.get("/:place", async (c) => {
//     const reqPlace = c.req.param("place")
//     const data = await getProjectData()
//     const existing = data.find(
//         (entry) => entry?.place?.toLowerCase() === reqPlace?.toLowerCase()
//     )
//     if(!existing) 
//         return c.json({ error: "place not found"}, 404)

//     return c.json({ data: existing, param: reqPlace})
// })

// app.post("/", async (c) => {
//     const body = await c.req.json<Project>()
//     if(!body.place) return c.json({ error: "Missing place"}, 400)
//         const data = await getProjectData()
//     const hasPlace = data.some(
//         (entry) => entry.place.toLoweCase() === body.place.toLowerCase()
//     )
//     if(hasPlace) return c.json({ error: "place already esists"}, 409)
//         data.push(body)
//     await updateProjectData(data)
//     return c.json({ data }, 201) 
// })

// const port = 3000

// console.log(`server is running on port $`)
