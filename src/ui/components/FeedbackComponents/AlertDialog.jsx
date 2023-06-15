import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'

export default function AlertDialog({texto, titulo, opciones, mostrar,confirmar, cancelar}) {
  const [open, setOpen] = React.useState(mostrar);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    cancelar()
  };


  return (
    <div>   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {titulo}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{ whiteSpace: "pre-wrap" }}>
            {texto}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmar }>{opciones[0]}</Button>
          <Button onClick={handleClose} autoFocus>
            {opciones[1]}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}