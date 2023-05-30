
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Collapse, Divider, Grid, IconButton, Slider, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

  
export const CollapseFiltro = ({filtro,children}) => {
    const [open, setopen] = useState(false)
    
  return (
    <Grid>
        <IconButton
            onClick={()=>setopen(!open)}
        >
            <Typography color={"white"}>{filtro}</Typography>
            {open? <KeyboardArrowUp sx={{color:"white"}}/> : <KeyboardArrowDown sx={{color:"white"}}/>}
            <Divider color="white" />
        </IconButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            {children}
        </Collapse>
    </Grid>
  )
}
