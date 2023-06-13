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
import { ImagenesComponent } from "./ImagenesComponent";
import { CatalogoDispatch } from "./../../../store/catalogo/CatalogoDispatch";
import { Button, Grid, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import axios from "axios";

function Row(props) {
  const { row, isOpen, onToggleOpen } = props;
  const ids = row.id;
  const [Edit, setEdit] = React.useState(false);
  const [placa, setPlaca] = React.useState(row.placa);
  const [imagenes, setImagenes] = React.useState(row.imagenes);
  const [imagEnvio, setImagEnvio] = React.useState(null);
  const handleEdit = () => {
    Edit ? setEdit(false) : setEdit(true);
  };

  const handleUpload = async () => {
    const fData = new FormData();
    const data = { id: ids, imagenes: imagEnvio };
    fData.append("data", data);

    try {
      const response = await axios.post(
        "https://procenterapi-production.up.railway.app/subir-imagen/",
        fData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const envioDatos = () => {
    Edit ? setEdit(false) : setEdit(true);
    handleUpload();
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" }, zIndex: 0 }}>
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
        <TableCell align="right">{row.placa}</TableCell>
        <TableCell align="right">{row.anio}</TableCell>
        <TableCell align="right">{row.precio}</TableCell>
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
            <MonetizationOnIcon sx={{ width: "16px", color: "green" }} />
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
                      <td>
                        <TextField
                          id="standard-basic"
                          variant="standard"
                          disabled={true}
                          value={row.nombre}
                          inputProps={{
                            style: { fontSize: "12px" },
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Placa</th>
                      <td>
                        <TextField
                          id="standard-basic"
                          variant="standard"
                          disabled={!Edit}
                          value={placa}
                          name="placa"
                          onChange={(event) => {
                            setPlaca(event.target.value);
                          }}
                          inputProps={{
                            style: { fontSize: "12px" },
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Año</th>
                      <td>
                        <TextField
                          id="standard-basic"
                          variant="standard"
                          disabled={true}
                          value={row.anio}
                          inputProps={{
                            style: { fontSize: "12px" },
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <Typography
                          sx={{ fontSize: "14px", mb: 1, fontWeight: "bold" }}
                        >
                          Precio
                        </Typography>
                      </th>
                      <td>
                        <Typography
                          sx={{ fontSize: "12px", mb: 1, color: "lightgrey" }}
                        >
                          {row.precio}
                        </Typography>
                      </td>
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
                  {props.admin === "asesor" ? (
                    <></>
                  ) : (
                    <Box sx={{ ml: 2, width: "50%", display: "flex", mt: 7 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <IconButton
                            disabled={!Edit}
                            onClick={envioDatos}
                            sx={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "4px",
                              backgroundColor: "blue",
                              "&:hover": {
                                backgroundColor: "darkblue",
                              },
                            }}
                          >
                            <SaveIcon
                              sx={{
                                color: "white",
                              }}
                            />
                          </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                          <IconButton
                            onClick={handleEdit}
                            sx={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "4px",
                              backgroundColor: "black",
                              "&:hover": {
                                backgroundColor: "darkgrey",
                              },
                            }}
                          >
                            <EditIcon
                              sx={{
                                color: "white",
                              }}
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
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
                mt: 4,
                mb: 5,
              }}
            >
              <ImagenesComponent
                edit={Edit}
                imagenesUrl={imagenes}
                setImagenes={setImagEnvio}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TablaCatologo({ admin }) {
  const { catalogo, isLoading, error } = CatalogoDispatch();
  const rows = catalogo;
  const [openRowId, setOpenRowId] = React.useState(null);

  const handleToggleOpen = (rowId) => {
    setOpenRowId((prevOpenRowId) => (prevOpenRowId === rowId ? null : rowId));
  };

  return (
    <>
      {rows.estado === false ? (
        <Paper sx={{ width: "100%", height: "auto" }}>
          <Typography
            sx={{ display: "flex", justifyContent: "center", mt: 10 }}
          >
            {rows.mensaje}
          </Typography>
        </Paper>
      ) : (
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
                  admin={admin}
                  key={row.id}
                  row={row}
                  isOpen={openRowId === row.id}
                  onToggleOpen={handleToggleOpen}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
