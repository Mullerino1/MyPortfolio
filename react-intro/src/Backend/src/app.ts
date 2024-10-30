

// import { serve } from "@hono/node-server";
// import { Hono } from "hono";
// import { cors } from "hono/cors";
// import type { Project } from "./types/index"
// import { getParsedData, updateProjectData } from "./types/lib";
// import type { Id } from "./types"
// import { PrismaClient } from "@prisma/client";


// const prisma = new PrismaClient


// const app = new Hono()

// app.use(
//     cors({
//         origin: "*",
//     })
// )

// app.get("/", async (c) => {
//     const data = await getParsedData()
//     return c.json({ data })
// })

// app.get("/:id", async (c) => {
//     const reqId = c.req.param("id")
//     const data = await getParsedData()
//     if (!reqId) return c.json({ error: "missing id"}, 404)
//         const existing = data.find(
//     (id) => id.id.toLowerCase() === reqId.toLowerCase()
// )
// if(!existing) return c.json({ error: "id not found"}, 404)
//     return c.json({ data: existing})
// })

// app.post("/:id", async (c) => {
    
//     const body = await c.req.json<Project>()
//     console.log("post " + body)
//     await updateProjectData(data)
//     return c.json({body}, 201)
// })

// //Needs some update with my current frontend
// app.delete("/:id", async (c) => {
//     const reqId = c.req.param("id")
//     if (reqId != undefined) {
//         try {
//           const removeProject = await prisma.project.delete({
//               where: {
//                   id: +reqId
//               }
//           })
//           console.log("removed project with id:", reqId)
//           return c.text('Removed!', 201)
//       } catch (error) {
//           console.error("Error removed project:", error)
//           return c.text(`Failed to removed project`, 500)
//       }  
//     }
//     else {
//       return c.text(`id is undefined.`, 500)
//     }
// })

// // const port = 3001
// // console.log(`server is running ish on port ${port}`)

// // serve({
// //     fetch: app.fetch,
// //     port,
// // })

// export default app



import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import type { Project } from "./types/index"
import { getParsedData, updateProjectData } from "./types/lib";
import type { Id } from "./types"
import { PrismaClient } from "@prisma/client";



const app = new Hono()

const prisma = new PrismaClient()

app.use(
    cors({
        origin: "*",
    })
)

app.get("/", async (c) => {
    const projects = await prisma.project.findMany({
        include: {
            categories: true
        }
    }
    )
    const data = projects.map(project => ({
        ...project, 
        categories: project.categories.map(categories => categories.categories),
    }))
    console.log(data)
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
    const categories = body.categories
    const project = await prisma.project.create({
        data: {
            id: +body.id,
            title: body.title,
            description: body.description,
            publishedAt: body.publishedAt as String,
            createdAt: body.createdAt as String,
            public: body.visibility,
            status: body.status
        }
    })

    for (let i = 0; i < categories.length; i++) {
        await prisma.categories.create({
            data: {
                projectId: +body.id,
                categories: categories[i]
            }
        })
    }

    const data = await prisma.project.findMany({
        include: {
            categories: true
        }
    })
    return c.json({data}, 201)
})

app.delete("/:id", async (c) => {
    const reqId = c.req.param("id")
    if (reqId) {
    const deletedProject = await prisma.project.delete({
        where: {
            id: +reqId
        }
    })
    const newData = await prisma.project.findMany({
        include: {
            categories: true
        }
    })
}
return c.json({ data: newData})
})

app.patch("/:id", async (c) => {
    const reqId = c.req.param("id")
    const updatedFields = await c.req.json<Partial<Project>>()
    console.log(updatedFields)
    const data = await prisma.project.update({
        where: {
            id: +reqId
        },
        data: { 
            id: updatedFields.id,
            title: updatedFields.title,
            description: updatedFields.description,
            publishedAt: updatedFields.publishedAt,
            public: updatedFields.visibility,
            createdAt: updatedFields.createdAt,
            status: updatedFields.status
         }
        
})
    await prisma.categories.deleteMany({
        where: {
            projectId: +reqId
        }
    })

    const categories = updatedFields.categories

    if(categories) {
    for (let i = 0; i < categories.length; i++) {
        await prisma.categories.create({
            data: {
                projectId: +reqId,
                categories: categories[i]
            }
        })
    }
}


    return c.json(200)
})


// const port = 3001
// console.log(`server is running ish on port ${port}`)

// serve({
//     fetch: app.fetch,
//     port,
// })

export default app