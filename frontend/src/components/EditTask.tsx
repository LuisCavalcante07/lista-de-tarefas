import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Pen } from 'lucide-react'

const EditTask = () => {
 return(
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
 )
}

export default EditTask