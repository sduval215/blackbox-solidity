import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// PAGES
import Main from './components/Main';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
