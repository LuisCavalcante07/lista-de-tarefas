'use client'

const API_URL = "http://localhost:3333"

export const getAllTasks = async () => {
    const response = await fetch(`${API_URL}/tasks`)
    return response.json()
}

export const deletTask = async (id: string) => {
    await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
    })
}

export const addTask = async (title : string) => {
    const response = await fetch(`${API_URL}/tasks/newtask`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ title })
    })

    return response.json()
}