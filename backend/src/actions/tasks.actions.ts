'use server'
import {prisma} from "../lib/prisma.js"

export const getTasks = async () => {
   const tasks = await prisma.task.findMany()

    console.log(tasks)
    return tasks
}

export const createTask = async (title: string) => {
   const task = await prisma.task.create({
    data: {
        task : title,
        done: false,
    }
   })
}

export const updateTask = async (id: string, data:{task?: String, done?: boolean }) => {
    const uptadetedTask = await prisma.task.update({where:{id}, data, })
    return uptadetedTask
}
