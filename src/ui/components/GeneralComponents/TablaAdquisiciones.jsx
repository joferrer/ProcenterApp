import * as React from "react";
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
import { CatalogoDispatch } from "./../../../store/catalogo/CatalogoDispatch";
import { Button, Grid, TextField } from "@mui/material";

import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";

function Row(props) {
  const { row, isOpen, onToggleOpen } = props;
  const [Edit, setEdit] = React.useState(false);
  const [placa, setPlaca] = React.useState(row.placa);
  const [imagenes, setImagenes] = React.useState(row.imagenes);
  console.log(imagenes);
  const handleEdit = () => {
    Edit ? setEdit(false) : setEdit(true);
  };

  const envioDatos = () => {
    Edit ? setEdit(false) : setEdit(true);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              onToggleOpen(row.id), setEdit(false);
            }}
          >
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.nombre}
        </TableCell>
        <TableCell align="right">{row?.placa}</TableCell>
        <TableCell align="right">{row?.anio}</TableCell>
        <TableCell align="right">{row?.precioDueno}</TableCell>
        <TableCell align="right">
          <IconButton
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "4px",
              border: "1px solid green",
              "&:hover": {
                backgroundColor: "lightgrey",
              },
            }}
          >
            <DoneOutlineRoundedIcon sx={{ width: "16px", color: "green" }} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Grid
              container
              display={"flex"}
              flexWrap={"wrap"}
              spacing={1}
              sx={{ mt: 2, width: "100%" }}
            >
              <Grid item xs={8} sm={3} sx={{ width: "100%", mr: 1, ml: 2 }}>
                <strong>Información</strong>
                <table
                  width={"90%"}
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "1px",
                  }}
                >
                  <tbody>
                    <tr>
                      <th>Nombre</th>
                      <td>{row.nombre}</td>
                    </tr>
                    <tr>
                      <th>Nombre</th>
                      <td>{row.nombre}</td>
                    </tr>
                    <tr>
                      <th>Nombre</th>
                      <td>{row.nombre}</td>
                    </tr>
                    <tr>
                      <th>Nombre</th>
                      <td>{row.nombre}</td>
                    </tr>
                    <tr>
                      <th>Nombre</th>
                      <td>{row.nombre}</td>
                    </tr>
                  </tbody>
                </table>
              </Grid>
              <Grid item xs={11} sm={6} sx={{ width: "100%", ml: 2 }}>
                <Box sx={{ width: "100%", display: "flex" }}>
                  <Box sx={{ width: "100%" }}>
                    <strong>Detalles</strong>
                    <TextField
                      sx={{ width: "100%", borderRadius: "1px" }}
                      inputProps={{
                        style: { fontSize: "13px" },
                      }}
                      disabled={true}
                      multiline
                      rows={4}
                      value={row.otros}
                    />
                  </Box>
                  <Box
                    sx={{ ml: 2, width: "50%", display: "flex", mt: 7 }}
                  ></Box>
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                width: "95%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: 2,
              }}
            />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TablaAbquisiciones() {
  const { catalogo, isLoading, error } = CatalogoDispatch();
  const rows = catalogo;
  const [openRowId, setOpenRowId] = React.useState(null);

  const handleToggleOpen = (rowId) => {
    setOpenRowId((prevOpenRowId) => (prevOpenRowId === rowId ? null : rowId));
  };

  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Placa</TableCell>
            <TableCell align="right">Año</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              key={row.id}
              row={row}
              isOpen={openRowId === row.id}
              onToggleOpen={handleToggleOpen}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
