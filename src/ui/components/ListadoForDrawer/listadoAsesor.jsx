import React from 'react';
import  AutoStoriesIcon  from '@mui/icons-material/AutoStories';
import { List } from '@mui/material';
import {ListaItemDrawer} from '../DrawerDesplegable/ListaItemDrawer';

export const ListadoAsesor = () => {
    return (
      <List className="fondo" sx={{ height: "100vh" }}>
        <ListaItemDrawer
          texto={"Catalogo"}
          icono={<AutoStoriesIcon sx={{ color: "white", width: 20 }} />}
        />
        <ListaItemDrawer
          texto={"Registrar Ventas"}
          icono={<AutoStoriesIcon sx={{ color: "white", width: 20 }} />}
        />
        <ListaItemDrawer
          texto={"Calculadora"}
          icono={<AutoStoriesIcon sx={{ color: "white", width: 20 }} />}
        />
        <ListaItemDrawer
          texto={"Historial"}
          icono={<AutoStoriesIcon sx={{ color: "white", width: 20 }} />}
        />
        <ListaItemDrawer
          texto={"Adquisiciones"}
          icono={<AutoStoriesIcon sx={{ color: "white", width: 20 }} />}
        />
      </List>
    );
}

