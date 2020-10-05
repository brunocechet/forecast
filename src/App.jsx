import React from 'react';

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Material
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

// Container Components
import City from './containers/City';
import Home from './containers/Home';

// Utils
import theme from './theme';

// Styles
import styles from './App.styles';

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.container}>
        <Router>
          <Switch>
            <Route path="/city/:name">
              <City />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
