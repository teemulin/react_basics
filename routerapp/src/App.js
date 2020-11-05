import React from 'react';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Navigator from './Navigator';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <header>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            J.Smith's Personal Training  
          </Typography>
        </Toolbar>
      </AppBar>
      </header>
      <BrowserRouter>
        <div>
         <Navigator />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>      
      </div>
  );
}

export default App;
