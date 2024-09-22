import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono()

app.use("/*", cors())

app.get("/projects", (c) => {})

const port = 3000

console.log(`server is running woop ${port}`)

serve({
    fetch: app.fetch,
    port,
})