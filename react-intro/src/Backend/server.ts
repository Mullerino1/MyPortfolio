// // Importerer nødvendige moduler
// import { serve } from "@hono/node-server";
// import { Hono } from "hono";
// import { cors } from "hono/cors";
// import { serveStatic } from "@hono/node-server/serve-static";
// import fs from 'node:fs/promises'

// const app = new Hono()

// app.use("/*", cors())

// // Setter opp statisk filbetjening for filer i "static" mappen
// // app.use("/static/*", serveStatic({ root: "./" }));

// const projects = [
//   {
//     id: crypto.randomUUID(),
//     title: "Game",
//     createdAt: new Date("2024-01-01"),
//   },
// ]

// app.get("/projects", async (c) => {
//   const data = await fs.readFile('./data/projects.ts', 'utf8')
//   const dataAsJson = JSON.parse(data)
//   return c.json(dataAsJson)
// })

// app.post("/add", async (c) => {
//   const newProject = await c.req.json()
//   console.log(newProject)
//   projects.push({ id: crypto.randomUUID(), createdAt: new Date(), ...newProject })

//   return c.json(projects, { status: 201 })
// })

// app.get("/", (c) => {
//   return c.json(projects);
// })

// const port = 3000

// console.log(`Server is running on port ${port}`);

// serve({
//   fetch: app.fetch,
//   port,
// });