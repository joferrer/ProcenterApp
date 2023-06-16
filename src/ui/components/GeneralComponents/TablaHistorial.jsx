import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ImagenesComponent } from "./ImagenesComponent";
import { CatalogoDispatch } from "./../../../store/catalogo/CatalogoDispatch";
import { Button, Grid, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { UsuariosDispatch } from "../../../store/usuario/UsuariosDispatch";
import { VentasDispatch } from "./../../../store/ventas/VentasDispatch";
import dayjs from "dayjs";

function GroupRow(props) {
  const { asesor, rows, isOpen, onToggleOpen } = props;

  return (
    <React.Fragment>
      <TableRow>
        <TableCell colSpan={4}>
          <Box display={"flex"} width={"100%"}>
            <IconButton
              aria-label="expand group"
              size="small"
              onClick={() => onToggleOpen(asesor)}
            >
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <Typography sx={{ fontSize: "15pt" }}>{asesor}</Typography>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Table>
              <TableBody>
                <Box sx={{ m: 2 }}>
                  <table style={{ border: "1px solid black", width: "100%" }}>
                    <th style={{ borderBottom: "1px solid black" }}>Fecha</th>
                    <th style={{ borderBottom: "1px solid black" }}>Cliente</th>
                    <th style={{ borderBottom: "1px solid black" }}>
                      Vehiculo
                    </th>
                    {rows.map((row) => (
                      <Row
                        key={row.id}
                        row={row}
                        isOpen={false} // Las filas individuales no tendrán collapse, solo el grupo
                        onToggleOpen={() => {}} // No se necesita toggle para las filas individuales
                      />
                    ))}
                  </table>
                </Box>
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function Row(props) {
  const { row } = props;

  return (
    <tr>
      <td
        style={{
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        {dayjs(new Date(row.fechaCreacion._seconds * 1000)).format(
          "DD-MM-YYYY"
        )}
      </td>
      <td
        style={{
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        {row.cliente.nombre}
      </td>
      <td
        style={{
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        {row.vehiculo.nombre}
      </td>
    </tr>
  );
}

export default function TablaHistorial() {
  const { ventas } = VentasDispatch();
  const [openGroups, setOpenGroups] = useState([]);
  const rows = ventas;

  const handleToggleOpen = (asesor) => {
    setOpenGroups((prevOpenGroups) =>
      prevOpenGroups.includes(asesor)
        ? prevOpenGroups.filter((group) => group !== asesor)
        : [...prevOpenGroups, asesor]
    );
  };

  const isGroupOpen = (asesor) => openGroups.includes(asesor);

  const groupedRows = rows.reduce((groups, row) => {
    const { asesor } = row;
    if (!groups[asesor.nombre]) {
      groups[asesor.nombre] = [];
    }
    groups[asesor.nombre].push(row);
    return groups;
  }, {});

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Asesores Ventas Realizadas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(groupedRows).map(([asesor, rows]) => (
              <GroupRow
                key={asesor}
                asesor={asesor}
                rows={rows}
                isOpen={isGroupOpen(asesor)}
                onToggleOpen={handleToggleOpen}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
