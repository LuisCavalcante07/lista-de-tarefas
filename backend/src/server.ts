import express from "express"
import tasksRoutes from "./routes/tasks.routes.js"
import cors from "cors"

const app = express()
app.use(cors())

app.use(express.json())

 app.use("/tasks", tasksRoutes)

app.listen(3333, () => {
    console.log("API rodando na posta 3333")
})