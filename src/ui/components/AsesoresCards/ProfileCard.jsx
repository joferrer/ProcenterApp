import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardContext } from "../../context/CardContext";
import { useContext } from "react";
import dayjs from "dayjs";

function ProfileCard({ card }) {
  const { deleteCard } = useContext(CardContext);

  return (
    <Card sx={{ maxWidth: "400px" }}>
      <CardMedia
        sx={{ height: "140px" }}
        image="https://johannesippen.com/img/blog/humans-not-users/header.jpg"
        title="profile"
      />
      <CardContent>
        <p>Cedula: {card.cedula}</p>
        <p>Nombre: {card.nombre}</p>
        <p>Correo: {card.correo}</p>
        <p>Teléfono: {card.telefono}</p>
        <p>
          Fecha de contratación:
          {dayjs(card.fechaVincu).format("DD-MM-YYYY")}
        </p>
        <p>Vehículos vendidos: 0</p>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => deleteCard(card.cedula)}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProfileCard;
