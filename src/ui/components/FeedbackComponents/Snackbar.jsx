
import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

export const SnackbarComponent = ({mostrar = false, mensaje= "", tipo="error", cerrar}) => {
    const [open, setOpen] = useState(mostrar)
    console.log("snack")

    useMemo(()=>setOpen(mostrar),[mostrar])    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        cerrar("")
        setOpen(false);
      };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={tipo} sx={{ width: '100%' }}>
           {mensaje}
        </Alert>
    </Snackbar>
  )
}
