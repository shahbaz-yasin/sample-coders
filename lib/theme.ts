import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc2626',
    },
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: () => document.getElementById('__next'),
      },
    },
    MuiPopper: {
      defaultProps: {
        container: () => document.getElementById('__next'),
      },
    },
    MuiModal: {
      defaultProps: {
        container: () => document.getElementById('__next'),
      },
    },
  },
});

export default theme; 