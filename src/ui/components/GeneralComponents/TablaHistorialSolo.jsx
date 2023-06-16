import React from "react";
import { VentasDispatch } from "./../../../store/ventas/VentasDispatch";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { authDispatch } from "./../../../store/auth/authDispatch";
import dayjs from "dayjs";

const TablaHistorialSolo = () => {
  const { ventas } = VentasDispatch();
  const { id } = authDispatch();

  // Filtrar los elementos por el ID
  const elementosFiltrados = ventas.filter((venta) => venta.asesor.id === id);

  return (
    <Grid container justifyContent="center">
      {elementosFiltrados.length === 0 ? (
        <Typography sx={{ ml: 4 }} variant="body1">
          No se ha realizado ninguna venta.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Nombre Vehículo</TableCell>
                <TableCell>Nombre Cliente</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {elementosFiltrados.map((elemento, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {dayjs(
                      new Date(elemento.fechaCreacion._seconds * 1000)
                    ).format("DD-MM-YYYY")}
                  </TableCell>
                  <TableCell>{elemento.vehiculo.nombre}</TableCell>
                  <TableCell>{elemento.cliente.nombre}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  );
};

export default TablaHistorialSolo;
