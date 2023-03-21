

import { createTheme } from '@mui/material';
import {red} from '@mui/material/colors';


export const procentertheme = createTheme({
    palette:{
        
        primary:{
            main: '#d73925'
        },
        secondary:{
            main: '#777'
        },
        error:{
            main: red.A400
        }


    }

});