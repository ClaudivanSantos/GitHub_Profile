import { createTheme } from '@mui/material';

export const Theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#000',
      dark: '#000',
      light: '#000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffa500',
      dark: '#cc8400',
      light: '#ffbc40',
      contrastText: '#fff',
    },
  },
});
