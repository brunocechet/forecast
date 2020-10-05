import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Quicksand',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#FFF9F9'
    },
    secondary: {
      main: '#758895'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#1B2931',
      paper: '#1B2931'
    }
  }
});

export default theme;
