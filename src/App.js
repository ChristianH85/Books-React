import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './Search/Search';
import Saved from './Saved/Saved';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/save" component={Saved} />
        </Switch>  
        </div>
      </Router>
      
    );
  }
}

export default App;
