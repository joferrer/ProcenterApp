import { IconButton, TableCell, TableRow, Typography } from "@mui/material"
import { Fragment, useState } from "react"
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material"


export const CollapsibleTableRow = ({contenido=["P1","P2","P3","P4","P5"]}) => {
    const [open, setOpen] = useState(false)
  return (
    <Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown/>}
          </IconButton>
        </TableCell>
            {
                //Fila de la tabla sin colapsar.
               contenido.map(c => <TableCell key={c}>{c}</TableCell>)
            }        
        </TableRow>
    </Fragment>
  )
}
