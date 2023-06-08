
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 320,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: "80vw",
    width: "80vw",
    maxHeight: "80vh"
  };
  

export const SeleccionarVehiculo = ({label,textoBoton,vehiculos = [], onFormChange, error}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = (id)=>{
        console.log(id)
        onFormChange({target:{value: id}})
        handleClose()
    }
  return (
    <Grid sx={{mt: "10px"}}>
        <Typography>{label}</Typography>
        <Button onClick={handleOpen} variant='outlined' color={!!error ?"error":"secondary" }>{textoBoton}</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Grid container sx={{...style, } } >
                <Typography id="modal-modal-title" variant="h6" component="h2">Seleccione el vehiculo</Typography>
                <Grid container  sx={{ overflowY: "scroll",width: "100%",height: "70vh"}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {   
                        vehiculos.map(v => <Grid item key={JSON.stringify(v)}>
                            <Card key={v.id}  sx={{ maxWidth: 250 }} onClick={()=>handleClick(v.id)}>
                             <CardActionArea>
                            <CardMedia image={v.imagenes[0]} title={v.nombre}   sx={{ height: 140 , width: 250}} />
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"18px", }}>{v?.nombre}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{}}>Placa: {v?.placa}</Typography>
                                <Typography variant="body2" 
                                    color="text.secondary" 
                                    sx={{fontWeight:"bold"}}
                                >COP {v?.precio.toLocaleString()}$
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        </Grid>
                        )
                    }
                    

                </Grid>
            </Grid>

        </Modal>
        
    </Grid>
  )
}
