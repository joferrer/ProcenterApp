import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


export default function FormDialog({mostrar = false, recibirDatos = ()=>{}}) {
  const [open, setOpen] = React.useState(mostrar);
    const [datos, setdatos] = useState({nombre:"", texto:""})
    React.useMemo(()=>setOpen(mostrar), [mostrar])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmar = ({})=>{
    setOpen(false)
    recibirDatos(datos)
  }
  return (
    <div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Digite los datos de la reseña: 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="nombre"
            label="Nombre del cliente"
            fullWidth
            variant="standard"
            onChange={(e)=>setdatos({...datos, nombre: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="texto"
            label="Texto"
            fullWidth
            variant="standard"
            onChange={(e)=>setdatos({...datos, texto: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={confirmar}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}