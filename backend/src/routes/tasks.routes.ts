import {Router} from "express"
import { getTasks, createTask, updateTask } from "../actions/tasks.actions.js"

const router = Router()

router.get("/", async (req, res) => {
    const tasks = await getTasks()
    res.json(tasks)
})

router.post("/newtask", async(req, res) => {
    const {title} = req.body
    const newTask = await createTask(title)
    res.json(newTask)
})

router.patch("/:id", async(req, res) => {
    const {id} = req.params
    const {task, done} = req.body

    try {
        const update = await updateTask(id, {task, done})
        res.json(update)
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar tarefa"})
        console.log(error)
    }
})

export default router
