'use client'
const API_URL = "http://localhost:3333/tasks/"

export const getAllTasks = async () => {
    const response = await fetch(API_URL)
    return response.json()
}

export const deletTask = async (id: string) => {
    await fetch(`http://localhost:3333/tasks/${id}`, {
        method: "DELETE",
    })
}

export const addTask = async ()