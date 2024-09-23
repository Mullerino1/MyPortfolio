import app from "./app";
import { port } from "./Config";

import { serve } from "@hono/node-server";

console.log(`server is running woop woop ${port}`)

serve({
    fetch: app.fetch,
    port: 3000,
})