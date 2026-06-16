"use client";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { Plus, List, X, ListChecks, Trash2 } from 'lucide-react'
import EditTask from "@/components/EditTask";
import ClearCompleted from "@/components/ClearCompleted";
import { useEffect, useState } from "react";
import {getAllTasks, deletTask, addTask, updateTaskName, toggleTaskDone, clearCompleted} from "@/services/tasks"
import { toast } from 'sonner'

type Task = {
  id: string;
  task: string;
  done: boolean;
};

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("")
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all")

  useEffect(() => {
      const fetchTasks = async () => {
      const data = await getAllTasks()
      console.log(data)
      setTasks(data)
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id: string) => {
    await deletTask(id)
    const data = await getAllTasks()
    setTasks(data)

    toast.success('Tarefa deletada com sucesso')
  }

  const handleNewTask = async () => {
    await addTask(title)

    const data = await getAllTasks()
    setTasks(data)

    setTitle("")
  }

  const handleNewName = async (id: string, title: string) => {
    await updateTaskName(id, title)

    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, task: title }
          : task
      )
    )

    toast.success('Edição realizada')
  }

  const handleDoneState = async (id: string, done: boolean) => {
    await toggleTaskDone(id, done)

    setTasks(prev =>
      prev.map(task =>
      task.id === id
       ? { ...task, done }
       : task
      )
    )
  }

   const handleClearCompleted = async () => {
    await clearCompleted()

    setTasks(prev => prev.filter(task => !task.done))

    toast.success('Tarefa Completas deletadas com sucesso')
  }

  const filteredTask = tasks.filter(task => {
    if (filter === "done") return task.done
    if (filter === "pending") return !task.done
    return true
  })

  const completedTasks = tasks.filter(task => task.done).length
  const totalTasks = tasks.length

  const progess = tasks.length === 0 ? 0 : (completedTasks/totalTasks) * 100

  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-500">
      <Card className="flex w-2xl p-3">

          <CardHeader className="flex gap-2">
            <Input placeholder="Adicionar tarefa" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <Button className="cursor-pointer text-md" onClick={handleNewTask}> <Plus/> Adicionar</Button>
          </CardHeader>
          
          <CardContent>

            <Separator className="mb-5"/>

            <div className="flex gap-2">
              <Button className="cursor-pointer" variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}><List/> Todos</Button>

              <Button className="cursor-pointer" variant={filter === "pending" ? "default" : "outline"} onClick={() => setFilter("pending")}><X/> Não Feitas</Button>

              <Button className="cursor-pointer" variant={filter === "done" ? "default" : "outline"} onClick={() => setFilter("done")}><ListChecks /> Feitas</Button>
            </div>

            <div className=" mt-4 border-b-1"> {/*Todos os cards*/}

              {filteredTask.map((task) => (
                <div key={task.id} className="h-12 flex justify-between items-center border-t-1 cursor-pointer" onClick={() => handleDoneState(task.id, !task.done)}> {/*Um card*/}

                  <div className={`w-2 h-full ${task.done ? "bg-green-300" : "bg-red-300"}`}/>
                  
                  <p className=" flex-1 px-3 text-sm">{task.task}</p>

                  <div className="flex gap-2 items-center">
                    <EditTask id={task.id} currentTitle={task.task} onEdit={handleNewName}/>
                    <Trash2 size={18} className="cursor-pointer" onClick={() => handleDelete(task.id)}/>
                  </div>  

                </div>
              ))}

            </div>

            <div className="flex w-full justify-between items-center mt-4">
             <div className="flex gap-2 items-center">
              <ListChecks/>
              <p className="text-sm">Tarefas concluídas ({`${completedTasks}/${totalTasks}`})</p>
             </div>
              <ClearCompleted onClear={handleClearCompleted}/>
           </div>

           
            <div className="h-4 w-full bg-gray-200 mt-4 mb-5 rounded-md">
              <div className="h-full bg-emerald-500 rounded-md" style={{width: `${progess}%`}}></div>
           </div>

          </CardContent>
      </Card>
    </main>
  );
};

export default Home;
