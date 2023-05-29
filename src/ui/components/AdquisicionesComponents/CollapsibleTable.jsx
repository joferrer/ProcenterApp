
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { CollapsibleTableRow } from './CollapsibleTableRow'

export const CollapsibleTable = ({columnas=[], filas}) => {
  return (
    <Grid>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {
                            columnas.map(v => <TableCell key={v}>{v}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    <CollapsibleTableRow/>
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
  )
}
