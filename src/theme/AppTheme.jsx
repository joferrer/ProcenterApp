import { ThemeProvider } from "@emotion/react"
import { procentertheme } from "./procentertheme";
import {CssBaseline} from '@mui/material';


export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={procentertheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}