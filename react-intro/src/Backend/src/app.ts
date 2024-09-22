import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono()

app.use("/*", cors())

app.get("/projects", (c) => {
    return c.json({
        data: [
            {
                id: crypto.randomUUID(),
                title: 'game',
                createdAt: new Date("2024-01-04"),
                categories: ["koding", "programming"],
            },
            {
                id: crypto.randomUUID(),
                title: 'work',
                createdAt: new Date("2023-02-04"),
                categories: ["koding", "programming"],
            },
            {
                id: crypto.randomUUID(),
                title: 'fun',
                createdAt: new Date("2020-06-12"),
                categories: ["koding", "programming"],
            },
        ]
    })
})

const port = 3000

console.log(`server is running woop ${port}`)

serve({
    fetch: app.fetch,
    port,
})