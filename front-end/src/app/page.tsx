"use client";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { Plus, List, X, ListChecks, Pen, Trash2 } from 'lucide-react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger }from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const Home = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-500">
      <Card className="flex w-2xl p-3">

          <CardHeader className="flex gap-2">
            <Input placeholder="Adicionar tarefa"/>
            <Button className="cursor-pointer text-md"> <Plus/> Adicionar</Button>
          </CardHeader>
          
          <CardContent>

            <Separator className="mb-5"/>

            <div className="flex gap-2">
              <Button className="cursor-pointer" variant={"default"}><List/> Todos</Button>
              <Button className="cursor-pointer" variant={"outline"}><X/> Não Feitas</Button>
              <Button className="cursor-pointer" variant={"outline"}><ListChecks /> Feitas</Button>
            </div>

            <div className=" mt-4 border-b-1"> {/*Todos os cards*/}

              <div className="h-12 flex justify-between items-center border-t-1"> {/*Um card*/}
                <div className="w-2 h-full bg-green-300 "></div>
                <p className=" flex-1 px-3 text-sm">Estudos</p>
                <div className="flex gap-2 items-center">
                  <Dialog>
                    <DialogTrigger asChild> 
                      <Pen size={18} className="cursor-pointer"/>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar Tarefa</DialogTitle>
                      </DialogHeader>
                      
                      <div className="flex gap-2">
                        <Input placeholder="Editar Tarefa"/>
                        <Button className="cursor-pointer">Editar</Button>
                      </div>
                    
                    </DialogContent>
                  </Dialog>
                  <Trash2 size={18} className="cursor-pointer"/>
                </div>
              </div>

            </div>

            <div className="flex w-full justify-between items-center mt-4">
             <div className="flex gap-2 items-center">
              <ListChecks/>
              <p className="text-sm">Tarefas concluídas (3/3)</p>
             </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="cursor-pointer text-xs h-8" variant={"outline"}><Trash2/>Limpar tarefas concluídas</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Tem certeza que deseja excluir?</AlertDialogTitle>
                  </AlertDialogHeader>
      
                  <AlertDialogFooter>
                    <AlertDialogAction>Sim</AlertDialogAction>
                    <AlertDialogCancel>Nao</AlertDialogCancel>
                  </AlertDialogFooter>
      
                </AlertDialogContent>
              </AlertDialog>
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
