import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { serveStatic } from "@hono/node-server/serve-static"
import { readFile, writeFile } from 'node:fs/promises'

const app = new Hono()

app.use("/*", cors())

app.use("/statics/*", serveStatic({ root: "./"}))

app.get('/json', async (c) => {
    const data = await readFile("Components/Database.json", "utf-8")
    return c.json(JSON.parse(data))
})



//Received help from Kim Andre when working with the get and post
app.post('/postjson', async (c) => {

    let tempData
    try {
        const data = await readFile('Components/Database.json', 'utf-8')
        tempData = JSON.parse(data)
        console.log('readin file')
    } catch (err) {
        console.log("error", err)
        return c.text('failed', 500)
    }

    const body = await c.req.json()

    tempData[Object.keys(body)[0]] = body[Object.keys(body)[0]]

    const updateJson = JSON.stringify(tempData, null, 2)


try{ 
    await writeFile('Components/Database.json', updateJson, 'utf-8')
    console.log('probably updated')
 } catch (err) {
    console.error('error', err)
    return c.text('failed', 500)
 }
console.log('it worked')
 return c.text('Worked', 201)
})


const port = 3999

console.log("yey server running")

serve ({
    fetch: app.fetch,
    port,
}) 