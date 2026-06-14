"use client";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { Plus, List, X, ListChecks, Trash2 } from 'lucide-react'
import EditTask from "@/components/EditTask";
import ClearCompleted from "@/components/ClearCompleted";
import { useEffect, useState } from "react";
import {getAllTasks, deletTask, addTask} from "@/services/tasks"

type Task = {
  id: string;
  task: string;
  done: boolean;
};

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("")

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
  }

  const handleNewTask = async () => {
    await addTask(title)

    const data = await getAllTasks()
    setTasks(data)
  }

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
              <Button className="cursor-pointer" variant={"default"}><List/> Todos</Button>
              <Button className="cursor-pointer" variant={"outline"}><X/> Não Feitas</Button>
              <Button className="cursor-pointer" variant={"outline"}><ListChecks /> Feitas</Button>
            </div>

            <div className=" mt-4 border-b-1"> {/*Todos os cards*/}

              {tasks.map((task) => (
                <div key={task.id} className="h-12 flex justify-between items-center border-t-1"> {/*Um card*/}

                  <div className={`w-2 h-full ${task.done ? "bg-green-300" : "bg-red-300"}`}/>
                  
                  <p className=" flex-1 px-3 text-sm">{task.task}</p>

                  <div className="flex gap-2 items-center">
                    <EditTask/>
                    <Trash2 size={18} className="cursor-pointer" onClick={() => handleDelete(task.id)}/>
                  </div>  

                </div>
              ))}



            </div>

            <div className="flex w-full justify-between items-center mt-4">
             <div className="flex gap-2 items-center">
              <ListChecks/>
              <p className="text-sm">Tarefas concluídas (3/3)</p>
             </div>
              <ClearCompleted/>
           </div>

           
            <div className="h-4 w-full bg-gray-200 mt-4 mb-5 rounded-md">
              <div className="h-full bg-emerald-500 rounded-md" style={{width: "50%"}}></div>
           </div>

          </CardContent>
      </Card>
    </main>
  );
};

export default Home;
