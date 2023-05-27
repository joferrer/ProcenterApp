
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
  };
  

export const SeleccionarVehiculo = ({label,textoBoton,vehiculos = [], onFormChange}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = (id)=>{
        console.log(id)
        onFormChange({target:{value: id}})
        handleClose()
    }
  return (
    <Grid>
        <Typography>{label}</Typography>
        <Button onClick={handleOpen} >{textoBoton}</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Grid sx={{...style, display:"flex", flexDirection: "column"}} >
                <Typography id="modal-modal-title" variant="h6" component="h2">Seleccione el vehiculo</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        vehiculos.map(v => <Card key={v.id}  sx={{ maxWidth: 300 }} onClick={()=>handleClick(v.id)}>
                             <CardActionArea>
                            <CardMedia image={v.imagenes.url1} title={v.nombre}   sx={{ height: 140 , width: 300}} />
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div">{v?.nombre}</Typography>
                                <Typography variant="body2" color="text.secondary">{v?.modelo}</Typography>
                                <Typography variant="body2" color="text.secondary">{v?.anio}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{}}>Placa: {v?.placa}</Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>)
                    }
                </Grid>
            </Grid>

        </Modal>
        
    </Grid>
  )
}
