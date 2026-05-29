import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger }from "./ui/alert-dialog"
import { Button } from "./ui/button";
import { Trash2 } from 'lucide-react'

const ClearCompleted = () => {
    return(
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
    )
}

export default ClearCompleted