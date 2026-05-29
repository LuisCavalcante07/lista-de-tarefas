import express from "express"
import tasksRoutes from "./routes/tasks.routes.js"

const app = express()

app.use(express.json())

 app.use("/tasks", tasksRoutes)

app.listen(3333, () => {
    console.log("API rodando na posta 3333")
})