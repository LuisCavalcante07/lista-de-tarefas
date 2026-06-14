import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Pen } from 'lucide-react'
import { useState } from "react"

type EditTaskProps = {
  id: string
  currentTitle: string
  onEdit: (id: string, title: string) => Promise<void>
}

const EditTask = ({id, currentTitle, onEdit}: EditTaskProps) => {
  const [title, SetTitle] = useState(currentTitle)
  const [open, setOpen] = useState(false)

 return(
    <Dialog open={open} onOpenChange={setOpen}>
     <DialogTrigger asChild> 
       <Pen size={18} className="cursor-pointer"/>
     </DialogTrigger>
     <DialogContent>
       <DialogHeader>
         <DialogTitle>Editar Tarefa</DialogTitle>
       </DialogHeader>
       
       <div className="flex gap-2">
         <Input placeholder="Editar Tarefa" value={title} onChange={(e) => SetTitle(e.target.value)}/>
         <Button className="cursor-pointer" onClick={async () => { await onEdit(id, title); setOpen(false)}}>Editar</Button>
       </div>
     
     </DialogContent>
    </Dialog>
 )
}

export default EditTask