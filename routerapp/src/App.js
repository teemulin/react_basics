import React from 'react';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Navigator from './Navigator';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to React Router</header>
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
