import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardContext } from "../context/CardContext";
import { useContext } from "react";

function PublicistaCard({ card }) {

  const { deletePublicista} = useContext(CardContext);


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://johannesippen.com/img/blog/humans-not-users/header.jpg"
        title="profile"
      />
      <CardContent>
        <p>Cedula: {card.cedula}</p>
        <p>Nombre: {card.nombre}</p>
        <p>Correo: {card.correo}</p>
        <p>Teléfono: {card.telefono}</p>
        <p>Fecha de contratación: {card.fecha}</p>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => deletePublicista(card.cedula)}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
export default PublicistaCard;